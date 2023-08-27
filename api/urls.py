from django.urls import path 
from . import views

# especifica as rotas da aplicação
urlpatterns = [
    path('', views.getRoutes, name="routes"),
]