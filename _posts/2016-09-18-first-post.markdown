---
layout: post
title:  "First Post"
date:   2016-09-18 07:51:46 +0200
categories: jekyll update
jsarr:
- javascript/test.js
- javascript/test2.js
---

{% for js_file in page.jsarr %}
  <script type="text/javascript">{% include {{ js_file }} %}</script>
{% endfor %}

{% for js_file in page.jsarr %}
  <script src='/{{ js_file }}' type="text/javascript"></script>
{% endfor %}
  
[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
