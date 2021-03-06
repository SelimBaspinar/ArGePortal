"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from project import views as project_views
from user import views as user_views




router = routers.DefaultRouter()

router.register(r'projects', project_views.ProjectView)
router.register(r'projectsabilites', project_views.ProjectAbilitiesView)
router.register(r'users', user_views.UserView)
router.register(r'departments', user_views.DepartmentView)
router.register(r'roles', user_views.RoleView)
router.register(r'getinvolvedprojects', user_views.GetInvolvedProjectView)
router.register(r'abilities', user_views.AbilitiesView)
router.register(r'ability_rating', user_views.AbilityRatingView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),


]
