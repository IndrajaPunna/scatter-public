---
layout: page
permalink: /
---

<!-- hero -->
<div id="hero" class="hero hero__homepage">
  <div class="container">
    <div class="row header-trans">
      {% include links.html param="light" %}
    </div>
    <div class="hero-content tac">
      <h1 class="hd-1">Content Is Conversation</h1>
      <p class="summary">Scatter makes sure you never run out of things to say.</p>
      <a href="#interact" class="btn btn-secondary">request a demo</a>
    </div>
  </div>
  <div class="skip tac">
    <a href="#content"><img src="{{ site.baseurl }}/img/i-arrow.png" alt=""></a>
  </div>
</div>
<!-- /hero -->

{% include nav.html %}

<!-- intro -->
<div id="intro" class="section scatter">
  <div class="container tac">
    <div class="row mt">
      <div class="col-md-4 arrow-r">
        <div class="brief tac">
          <h3 class="hd-3">discover</h3>
          <img src="{{ site.baseurl }}/img/i-discover.png" alt="">
          <p>Our intelligent search adapts to your needs, and learns from your patterns, giving you recommended and customised results. Never miss a trend again.</p>
          <a href="#"><img src="{{ site.baseurl }}/img/i-discover-1.jpg" alt=""></a>
          <a href="#" class="ml"><img src="{{ site.baseurl }}/img/i-discover-2.jpg" alt=""></a>
        </div>
      </div>
      <div class="col-md-4 arrow-r">
        <div class="brief tac">
          <h3 class="hd-3">distribute</h3>
          <img src="{{ site.baseurl }}/img/i-distribute.png" alt="">
          <p>Use our editorial calendar for easy planning of your content marketing activities. Wrap the content you like with the ads that you want, and let it travel.</p>
          <a href="#"><img src="{{ site.baseurl }}/img/i-distribute-1.jpg" alt=""></a>
          <a href="#" class="ml"><img src="{{ site.baseurl }}/img/i-distribute-2.jpg" alt=""></a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="brief tac">
          <h3 class="hd-3">delight</h3>
          <img src="{{ site.baseurl }}/img/i-delight.png" alt="">
          <p>Our advanced analytics allow you to monitor engagement rates on your selected content. Get everything you need straight from our Scatter dasboard.</p>
          <a href="#"><img src="{{ site.baseurl }}/img/i-delight-1.jpg" alt=""></a>
          <a href="#" class="ml"><img src="{{ site.baseurl }}/img/i-delight-2.jpg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /intro -->

<!-- section-1 -->
<div id="section-1" style="background: url('img/bg-home-ap.jpg');" class="section">
  <div class="container star">
    <div class="row tac">
      <div class="col-md-6">
        <div class="circle arrow-double">
          <h2 class="hd-2">advertisers</h2>
          <img src="{{ site.baseurl }}/img/i-advertisers.png" alt="">
          <p class="brief-text">
            A content marketplace that works for <br>
            you. We source content from best <br>
            of breed publishers and make it <br>
            available for you to engage <br>
            your audiences
          </p>
        </div>
        <p><a href="{{ site.baseurl }}/advertisers" class="btn btn-tertiary">learn more about scatter</a></p>
      </div>
      <div class="col-md-6">
        <div class="tac circle circle-secondary">
          <h2 class="hd-2">publishers</h2>
          <img src="{{ site.baseurl }}/img/i-publishers.png" alt="">
          <p class="brief-text">
            Generate site traffic and revenues! <br>
            Scatter brings your feature content <br>
            to the fore, increasing your page <br>
            views, revenue streams, and <br>
            your social quotient
          </p>
        </div>
        <p><a href="{{ site.baseurl }}/publishers" class="btn btn-tertiary">join our publisher network</a></p>
      </div>
    </div>
  </div>
</div>
<!-- /section-1 -->

<div class="section scatter">
  <div class="container tac">
    <h2 class="hd-2">who we work with</h2>
    <p class="brief-text">From premium publishers to top advertisers, the best brands love Scatter</p>
    {% include network.html %}
  </div>
</div>

<div class="section section-gray tac">
  <h2 class="hd-2">knowledge</h2>
  <p class="mb">Our knowledge and resource center keeps you up-to-date and informed with the world of content marketing.</p>
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