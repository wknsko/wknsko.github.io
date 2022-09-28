<template>
<div class="card">
    <div class="name">Anastasiya Kononova</div>
    <div class="desc">ukrainian based in Prague since 2007</div>
    <div class="position-box">
        <div class="position">front-end developer interested in Vue</div>
    </div>
    <div class="links">
        <div class="github">www.github.com/wknsko</div>
        <div class="email">wknsko@gmail.com</div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');


/* colors */
$darkest: #464646;
$white: #EFEFEF;
$greyish: #aaa9a9;
$dark-greyish: #464646;
$black: #333;       
$blackerblack: #1a1a1a;

/* fonts */
$open: 'Open Sans',
    sans-serif;
$sans: 'PT Sans',
    sans-serif;
$mono: 'PT Mono',
    sans-serif;

body {
    background: $darkest;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #414345, #232526);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #414345, #232526);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card {
    width: 80vw;
    max-width: 700px;
    background-color: $white;
    padding: 30px;
    box-shadow: 6px 6px $blackerblack;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation: fadein 2s;
}

.name {
    font-family: $open;
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: $black;
}

.desc {
    font-family: $sans;
    font-size: 16px;
    font-weight: 300;
    color: $dark-greyish;
}

.position-box {
    width: 100%;
    max-width: 390px;
}

.position {
    font-family: $mono;
    font-size: 17.5px;
    color: $black;
    overflow: hidden;
    border-right: .15em solid $greyish;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: -.001em;
    animation: typing 6.5s steps(40, end), blink-caret .75s step-end infinite;

    @keyframes typing {
        from {
            width: 0
        }

        to {
            width: 100%
        }
    }

    @keyframes blink-caret {

        from,
        to {
            border-color: transparent
        }

        50% {
            border-color: $dark-greyish;
        }
    }
}

.links {
    padding-top: 100px;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    font-family: $mono;
    font-size: 16px;
    color: $black;
}
</style>