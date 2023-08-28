from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), # configura um novo caminho para as rotas da aplicação (/api/urls.py)
    path('', TemplateView.as_view(template_name="index.html")),
]
