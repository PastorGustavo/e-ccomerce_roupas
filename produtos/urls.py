from django.urls import path
from . import views

app_name = 'produto'

urlpatterns = [
    
    # Apps da página inicial
    path('produtos',views.Index.as_view(), name='produtos'),
    path('produtos/<str:paises>',views.Index.as_view(), name='produtos'),
    path('produtos/<str:paises>/<str:cidade>',views.Index.as_view(), name='produtos'),
    #path('pesquisa/<str:termo>',views.index, name='pesquisa'),

    # Detalhes do produto
    path('detalhes/<slug:slug>',views.Detalhes.as_view(), name='detalhes'),

    # Carrinho
    #path('carrinho',views.index, name=''),
]
