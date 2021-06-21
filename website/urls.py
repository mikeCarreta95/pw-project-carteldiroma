from django.shortcuts import render
from django.urls import path
from . import views

app_name = "website"

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('about', views.about_page_view, name='about'),
    path('contacts', views.contacts_page_view, name='contacts'),
    path('products', views.products_page_view, name='products'),
    path('quizz', views.quizz_page_view, name='quizz'),
    path('coments', views.coments_page_view, name='coments'),
    path('login', views.login_page_view, name='login'),
    path('logout', views.logout_page_view, name='logout'),
    path('websiteStuff', views.websiteStuff_page_view, name='websitestuff')
]