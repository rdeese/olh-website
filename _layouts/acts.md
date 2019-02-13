---
layout: default
---

{% include site-header.html %}

<main class="main  container">
    <h1>{{ page.title }}</h1>

    <div class="acts">
        {% for act in site.data.acts %}
            <div class="act">
                <h3>{{ act.name }}</h3>
                <div class="links">
                    {% for link in act.links %}
                       <a href={{ link[1] }} target="_blank">
                           {{ link[0] }}
                       </a>{% unless forloop.last %} &bull; {% endunless %} 
                    {% endfor %}
                </div>
                <img src={{site.baseurl}}{{ act.image }}></img>
            </div>
        {% endfor %}
    </div>

    {% if page.aside == true %}{% include site-aside.html %}{% endif %}

</main>

{% include site-footer.html %}
