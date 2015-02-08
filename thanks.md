---
layout: page
permalink: /thanks
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css">

<!-- hero -->
<div id="hero" class="hero hero__homepage">
  <div class="hero-a">
    <div class="header header-trans">
      <div class="container">
        <div class="row">
          {% include links.html param="light" %}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="hero-content tac">
        <h1 class="hd-1 mt">Awesome content.</h1>
      </div>
    </div>
  </div>
  <div class="hero-b tac">
    <h2 class="hd-1">No more awful conversations.</h2>
    <div class="breathe">
      <img src="{{ site.baseurl }}/img/hero-scatter-logo.png" alt="">
    </div>
    <div>
      <a href="#contact" class="btn btn-tertiary">request a demo</a>
    </div>
    <div class="hidden-xs skip tac">
      <a href="#content"><img src="{{ site.baseurl }}/img/i-arrow.png" alt=""></a>
    </div>
  </div>
</div>
<!-- /hero -->

<!-- intro -->
<div id="content" class="hidden-xs section scatter">
  <div class="container tac">
    <div class="row mt">
      <div class="col-xs-4 arrow-r">
        <div class="brief tac">
          <h3 class="hd-3">discover</h3>
          <img src="{{ site.baseurl }}/img/i-discover.png" alt="">
          <p>Our intelligent search adapts to your brands’ needs, learns from your usage patterns, thus, giving you better custom results. Never miss a trend again.</p>
          <span class="screenshot">
            <a href="{{ site.baseurl }}/img/discover-1.jpg" data-lightbox="discover-1"><img src="{{ site.baseurl }}/img/i-discover-1.jpg" alt=""></a>
            <a href="{{ site.baseurl }}/img/discover-2.jpg" data-lightbox="discover-2" class="ml"><img src="{{ site.baseurl }}/img/i-discover-2.jpg" alt=""></a></span>
        </div>
      </div>
      <div class="col-xs-4 arrow-r">
        <div class="brief tac">
          <h3 class="hd-3">distribute</h3>
          <img src="{{ site.baseurl }}/img/i-distribute.png" alt="">
          <p>Our editorial calendar helps easy planning for your content activities. Wrap the content you like with your brand ads and make it 100% safe to distribute. Never score a self-goal!</p>
          <span class="screenshot">
            <a href="{{ site.baseurl }}/img/distribute-1.jpg" data-lightbox="distribute-1"><img src="{{ site.baseurl }}/img/i-distribute-1.jpg" alt=""></a>
            <a href="{{ site.baseurl }}/img/distribute-2.jpg" data-lightbox="distribute-2" class="ml"><img src="{{ site.baseurl }}/img/i-distribute-2.jpg" alt=""></a></span>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="brief tac">
          <h3 class="hd-3">delight</h3>
          <img src="{{ site.baseurl }}/img/i-delight.png" alt="">
          <p>Our simple analytics allows you to monitor engagement and dwell time on the content you selected. All of this in an uncomplicated dashboard. Never second guess efficacy.</p>
          <span class="screenshot">
            <a href="{{ site.baseurl }}/img/delight-1.jpg" data-lightbox="delight-1"><img src="{{ site.baseurl }}/img/i-delight-1.jpg" alt=""></a>
            <a href="{{ site.baseurl }}/img/delight-2.jpg" data-lightbox="delight-2" class="ml"><img src="{{ site.baseurl }}/img/i-delight-2.jpg" alt=""></a></span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /intro -->

<!-- section-1 -->
<div id="section-1" class="section">
  <div class="container star">
    <div class="row tac">
      <div class="col-md-6">
        <div class="advertisers">
          <div class="circle arrow-double">
            <h2 class="hd-2">advertisers</h2>
            <img src="{{ site.baseurl }}/img/i-advertisers.png" alt="">
            <p class="brief-text">A content marketplace that works for you. <br>
            We source the best of breed content <br>
            and make it available for you <br>
            to engage with your <br>
            audiences</p>
          </div>
          <div class="pb"><a href="{{ site.baseurl }}/advertisers" class="btn btn-tertiary">learn more about scatter</a></div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="publishers">
          <div class="circle circle-secondary">
            <h2 class="hd-2">publishers</h2>
            <img src="{{ site.baseurl }}/img/i-publishers.png" alt="">
            <p class="brief-text">Generate direct traffic and revenues! <br>
            Scatter allows for rediscovery <br>
            of your content, thus, adding <br>
            to your traffic efforts and <br>
            revenue initiatives.</p>
          </div>
          <div class="pb"><a href="{{ site.baseurl }}/publishers" class="btn btn-tertiary">join our publisher network</a></div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /section-1 -->

<div class="section scatter">
  <div class="container tac">
    <h2 class="hd-2">who we work with?</h2>
    <p class="brief-text">Some of our fine partner publishers</p>
    {% include network.html %}
  </div>
</div>

<div class="section section-gray tac">
  <h2 class="hd-2">knowledge</h2>
  <p class="mb">The Who, What, Why & How of Content Marketing. Stay Informed.</p>
  <div class="container">
    <div class="row mb">
      {% for post in site.tags.feature%}
      <div class="col-md-4 mb">
        <a href="{{ site.baseurl }}{{ post.url }}">
          <div class="article article-sm tac" style="background-image:url('{{ site.baseurl }}/img/articles/{{post.image}}')">
            <h3>{{ post.title }}</h3>
          </div>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
</div>