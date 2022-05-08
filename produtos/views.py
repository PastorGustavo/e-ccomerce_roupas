from re import template
from django.shortcuts import render, HttpResponse
from django.views.generic import View
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from . import models


class Index(ListView):
   model = models.Produtos
   context_object_name = 'produtos'
   template_name = 'produtos/index.html'
   
   def get_queryset(self) :
      qs =  super().get_queryset()

      # Verificando se tem estado
      pais = self.kwargs.get('paises')
      cidade = self.kwargs.get('cidade')
      
      # Verificando se tem estado
      if cidade:
         qs = qs.filter(estado__iexact=cidade)

      # Verificando se tem pais
      if pais and pais != 'favicon.ico':
         qs = qs.filter(pais__iexact=pais)
         return qs


      return qs

   
class Detalhes(DetailView):
   template_name = 'produtos/detail.html'
   model = models.Produtos
   slug_url_kwargs = 'slug'
   context_object_name = 'produto'
