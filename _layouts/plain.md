---
layout: default
---

{% include site-header.html %}

<main class="main  container">
    <h1>{{ page.title }}</h1>

    {{ content }}

    {% if page.aside == true %}{% include site-aside.html %}{% endif %}

</main>

{% include site-footer.html %}
