// Getting images with the attribute data-src 
const imagesToLoad = document.querySelectorAll("img[data-src]");

// Optional parameters being set for the IntersectionObserver //
const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute("data-src");}
}

if ("IntersectionObserver" in window)   {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
      });
    } else {
      imagesToLoad.forEach((img) => {
        loadImages(img);
      });
    }

    let count = localStorage.getItem('formSubmitCount') || 0;

document.querySelector('#drinkCount').textContent = count;