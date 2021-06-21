from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from django.urls import reverse


def home_page_view(request):
    return render(request, 'website/index.html')


def about_page_view(request):
    return render(request, 'website/about.html')


def products_page_view(request):
    return render(request, 'website/products.html')


def contacts_page_view(request):
    return render(request, 'website/contacts.html')


def quizz_page_view(request):
    return render(request, 'website/quizz.html')


def coments_page_view(request):
    return render(request, 'website/coments.html')


def login_page_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request,
                            username=username,
                            password=password)

        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('website:home'))
        else:
            return render(request, "website/login.html", {
                'message': "Invalid credentials, please try again! :)"
            })
    return render(request, "website/login.html")


def logout_page_view(request):
    logout(request)
    return render(request, 'website/index.html', {
        'message': 'Logged out'})


def websiteStuff_page_view(request):
    return render(request, 'website/websiteStuff.html')