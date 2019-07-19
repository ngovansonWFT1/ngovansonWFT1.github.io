$(function() {

    let firework = Xteam.fireworkShow('#firework', 300);
    let firework1 = Xteam.fireworkShow('.title', 400);
    let firework2 = Xteam.fireworkShow('.loading', 400);

    let loading_effect = new TimelineMax({onComplete: comeIn});
    loading_effect
    .from($('.loading'),0.7, {opacity:0})
    .from($('.heart'), 1, {scale:3, opacity:0})
    .to($('.heart'), 1, {scale:0.3, ease:Power4.easeOut})
    .to($('.heart'), 1, {scale:1, ease:Elastic.easeOut})
    .to($('.heart'), 1, {scale:0.3, ease:Power4.easeOut})
    .to($('.heart'), 1, {scale:1, ease:Elastic.easeOut})
    .to($('.heart'), 1, {scale:0.3, ease:Power4.easeOut})
    .to($('.heart'), 1, {scale:1, ease:Elastic.easeOut})
    .to($('.heart'), 1, {scale:3, opacity:0, ease:Elastic.easeOut})
    .from($('.loading h1'), 1, {y: -200, opacity:0, ease:Bounce.easeOut, delay: "+=3" })
    .to($('.loading h1'), 1, {x:2200, opacity:0, ease:SlowMo.easeOut, delay: 2 })
    .to($('.loading'), 1, {x:-2200, opacity:0, ease:SlowMo.easeOut, delay: "+=1" })

    function comeIn() {
        content_effect.play();
    }




    let content_effect = new TimelineMax({paused:true});
    content_effect
    .from($('.img1'),1, {x: -200, opacity: 0, ease: Back.easeOut})
    .from($('.img2'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img3'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img4'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img5'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img6'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img7'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img8'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img9'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img10'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img11'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.img12'),1, {x: -200, opacity: 0, delay:"+=1",ease: Back.easeOut})
    .from($('.cake'),1, {y: -200, opacity: 0, delay:"+=1",ease: Bounce.easeOut})
    .from($('.title li:nth-child(1)'),1, {x: -200, opacity: 0, delay:"+=1",ease: SlowMo.easeOut})
    .from($('.title li:nth-child(2)'),1, {x: -200, opacity: 0, delay:"+=1",ease: SlowMo.easeOut})
    .from($('.title li:nth-child(3)'),1, {x: -200, opacity: 0, delay:"+=1",ease: SlowMo.easeOut})
    .from($('.title li:nth-child(4)'),1, {x: -200, opacity: 0, delay:"+=1",ease: SlowMo.easeOut})
    .to($('.img12'),1, {opacity: 0, delay:1,ease: Back.easeOut})
    .to($('.img11'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img10'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img9'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img8'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img7'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img6'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img5'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img4'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img3'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img2'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.img1'),1, {opacity: 0, delay:"+=1",ease: Back.easeOut})
    .to($('.title'),1, {y:-150,ease: Elastic.easeOut})
    .to($('.cake'),1, {y: 100, delay:"+=1",ease: Bounce.easeOut})

    


});