from django.urls import path

from homepage.views import index, docs

app_name = 'homepage'
urlpatterns = [
    path('', index, name='index'),
    path('docs/', docs, name='docs'),
]
