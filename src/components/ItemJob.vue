<template>
  <div class="item-job" @click="$emit('openModal')">
    <img :src="job.thumb" class="img-fluid" :alt="job.name">
		<div class="content">
      <h2>{{ job.name }}</h2>
      <p>{{ job.client }}</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ItemJob',
  props: ['job'],
}
</script>

<style lang="scss" scoped>
  @import "~bootstrap/scss/bootstrap-grid.scss";

  @mixin hover {
    h2 {
      transform: translate3d(0, -50%, 0) translate3d(0, 30px, 0);
      opacity: 1;
    }
    .content::before, p {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .item-job {
    cursor: pointer;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;

    h2, p {
      opacity: 0;
    }

    h2 {
    	position: absolute;
    	top: 50%;
    	left: 0;
    	width: 100%;
    	color: #fff;
    	transition: transform 0.35s, color 0.35s;
    	transform: translate3d(0, -50%, 0);
    }

    p {
    	position: absolute;
    	bottom: 0;
    	left: 0;
    	padding: 2em;
    	width: 100%;
    	transform: translate3d(0, 10px, 0);
    }

    img {
      filter: grayscale(100%);
    }

    .content::before {
      content: '';
    	width: 101%;
    	height: 101%;
    	position: absolute;
    	top: 0;
    	left: 0;
    	background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8) 75%);
    	transform: translate3d(0, 50%, 0);
      opacity: 0;
    }

    .content::before,
    p {
    	transition: opacity 0.35s, transform 0.35s;
    }

    &:hover {
      @include hover;
    }

    @include media-breakpoint-down(sm) {
      @include hover;

      h2 {
        top: initial;
        bottom: 60px;
      }

      p {
        padding: .5em;
      }

      .content::before {
        top: initial;
        bottom: -1px;
        background: linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0) 100%);
      }
    }
  }
</style>
