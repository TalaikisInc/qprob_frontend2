<template>
<div>
        <div class="error-page text-center">
            <div class="tr-section tr-section-padding">
                <div class="error-page-content">
                    <div class="logo text-center">
                        <a class="navbar-brand" :href="baseUrl"><img class="img-responsive" src="~/assets/logo/qprob.png" :alt="logoAlt"></a>
                    </div>
                    <div class="not-found">
                        <h1>404</h1>
                        <p>Page not found.</p>
                        <a :href="baseUrl">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'errorPage',
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      logoAlt: process.env.SITE_NAME
    }
  }
}
</script>

<style>
</style>