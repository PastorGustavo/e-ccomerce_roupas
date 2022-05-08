from django.utils.text import slugify
from django.db import models
import random 


class Produtos(models.Model):

    nome = models.CharField(max_length=80, verbose_name='Nome')

    descricao = models.TextField(max_length=450)

    slug = models.SlugField(unique=True, blank=True, null=True)

    imagem = models.ImageField(upload_to='media/%Y/%m/%d',)

    estado = models.CharField(max_length=2,
    choices=(
        ('SP', 'São Paulo'),
        ('RJ', 'Rio de Janeiro'),
        ('RS', 'Rio Grande do Sul'),
        ('SC', 'Santa Catarina'),

        ('PS', 'Psg'),
        ('BC', 'Barcelona'),
        ('RM', 'Real Madrid'),
        ('MU', 'Manchester United'),
        ('BM', 'Bayern München'),
        ))

    pais = models.CharField(max_length=2,
    choices=(
        ('BR','Brasil'),
        ('IT','Internacional'),
        ))

    def save(self, *args ,**kwargs):
        # Criando um identificador para o produto

        if not self.slug:
            self.slug = slugify(f'{self.nome}-{random.randint(1,25)}')
        else: 
            self.slug = slugify(self.slug)
        
        return super().save(*args,**kwargs)
                
  
    def __str__(self) -> str:
        return self.nome

class Variacao (models.Model):
    produto= models.ForeignKey(Produtos,on_delete=models.CASCADE)
    nome= models.CharField(max_length=80)

    preco= models.FloatField()
    preco_promo= models.FloatField(default=0)

    estoque= models.PositiveIntegerField(default=1)

    tamanhos = models.CharField(
    max_length=1,
    choices=(
            ('1','P'),
            ('2','PP'),
            ('3','M'),
            ('4','G'),
            ('5','GG'),
        )   
    )

    def __str__(self) -> str:
        return self.nome

class Imagens(models.Model):
    produto = models.ForeignKey(Produtos, on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='media/%Y/%m/%d',)