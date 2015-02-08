---
layout: page
permalink: /knowledge/
---
<!-- hero -->
<div id="hero" class="hero hero__bg hero__knowledge">
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
        <h1 class="hd-1 mt">stay hungry but not foolish.</h1>
      </div>
    </div>
  </div>
  <div class="hero-b tac">
    <h2 class="hd-1">study our digital marketing trends.</h2>
    <div class="breathe">
      <img src="{{ site.baseurl }}/img/hero-scatter-logo.png" alt="">
    </div>
    <div class="hidden-xs skip tac">
      <a href="#content"><img src="{{ site.baseurl }}/img/i-arrow.png" alt=""></a>
    </div>
  </div>
</div>
<!-- /hero -->

<div id="content" class="mt">
  <div class="container">
    <div class="row">
      {% for post in site.posts %}
      <div class="col-md-{% cycle '6','6','4','4','4' %} mb">
        <a href="{{ site.baseurl }}{{ post.url }}">
          <div class="article {% cycle '','','article-sm','article-sm','article-sm'%} tac" style="background-image:url('{{ site.baseurl }}/img/articles/{{post.image}}')">
            <h3>{{ post.title }}</h3>
          </div>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
</div>