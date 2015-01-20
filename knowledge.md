---
layout: page
permalink: /knowledge/
---
<!-- hero -->
<div id="hero" class="hero hero__knowledge">
  <div class="container">
    <div class="row header-trans">
      {% include links.html param="light" %}
    </div>
    <div class="hero-content tac">
      <h1 class="hd-1">knowledge and resource center</h1>
      <p class="summary">Insights and information from the world of digital marketing.</p>
    </div>
  </div>
  <div class="skip tac">
    <a href="#content"><img src="{{ site.baseurl }}/img/i-arrow.png" alt=""></a>
  </div>
</div>
<!-- /hero -->

{% include nav.html %}


<div id="knowledge" class="mt">
  <div class="container">
    <div class="row">
      {% for post in site.posts %}
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