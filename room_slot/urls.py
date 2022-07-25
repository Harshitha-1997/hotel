from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from login import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('booking.urls')),
    path('user/',include('login.urls')),
    path('manager/',include('login.urls')),
    path('logout',views.logout,name='logout'),
    path('api/',include('api.urls'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


