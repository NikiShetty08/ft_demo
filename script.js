document.addEventListener("DOMContentLoaded", function() {
    const bulb_1Icon = document.querySelector("#bulb_1");
    const bulb_2Icon = document.querySelector("#bulb_2");
    const bulb_3Icon = document.querySelector("#bulb_3");
    const mainTitle = document.querySelector(".text-container h1");
    const subTitle = document.querySelector(".text-container p");
    const ctaButton = document.querySelector(".cta-button");

    //timeline
    const tl = gsap.timeline();

    //bulb Animations
    tl.to(bulb_1Icon, {
            duration: 1,
            opacity: 1,
            scale: 1.2,
            ease: "power2.out",
            repeat: 1,
            yoyo: true,
        })
        .to(
            bulb_2Icon, {
                duration: 1,
                opacity: 1,
                scale: 1.2,
                ease: "power2.out",
                repeat: 1,
                yoyo: true,
            },
            "-=0.5"
        )
        .to(
            bulb_3Icon, {
                duration: 1,
                opacity: 1,
                scale: 1.2,
                ease: "power2.out",
                repeat: 1,
                yoyo: true,
            },
            "-=0.5"
        );

    //Text animation
    tl.to(
        mainTitle, {
            duration: 1,
            opacity: 1,
            y: -15,
            ease: "power2.out",
        },
        "-=0.5"
    );

    tl.to(
        subTitle, {
            duration: 1,
            opacity: 1,
            y: -10,
            ease: "power2.out",
        },
        "-=0.8"
    );

    // CTA
    tl.to(
        ctaButton, {
            duration: 1,
            opacity: 1,
            y: -25,
            ease: "power2.out",
        },
        "-=0.8"
    );



    //when button is clicked
    ctaButton.addEventListener("click", function() {
        window.location.href = "https://www.flashtalking.com/";
    });
});