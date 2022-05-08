from pyexpat import model
from django.contrib import admin
from . import models




class ImagemAdm(admin.TabularInline):
    model = models.Imagens
    extra = 2

class VariacaoAdm(admin.TabularInline):
    model = models.Variacao
    extra = 0

class ProdutosAdmin(admin.ModelAdmin):
    model = models.Produtos
    inlines = [VariacaoAdm,ImagemAdm]



admin.site.register(models.Produtos,ProdutosAdmin)



