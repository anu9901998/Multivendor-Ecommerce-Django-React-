from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()  #There are two type 1. DefaultRouter() : show the root api http://127.0.0.1:8000/api/
                                                    # 2. SimpleRouter() : it will not show api root
router.register('address',views.CustomerAddressViewSet)
router.register('productrating',views.ProductRatingViewSet)

urlpatterns = [
# path('vendors',views.VendorList)
    path('vendors',views.VendorList.as_view()),
    path('vendor/<int:pk>/',views.VendorDetails.as_view()),
    #Product urls
    path('products',views.ProductList.as_view()),
    path('product/<int:pk>/',views.ProductDetails.as_view()),
    #Product Category
    path('categories',views.CategoryList.as_view()),
    path('category/<int:pk>/',views.CategoryDetails.as_view()),
    #Customer urls
    path('customers',views.CustomerList.as_view()),
    path('customer/<int:pk>/',views.CustomerDetails.as_view()),
    #Orders urls
    path('orders',views.OrderList.as_view()),
    path('order/<int:pk>/',views.OrderDetails.as_view()),
    #Orders urls
    # path('orders-items',views.OrderItemList.as_view()),
    # path('order-item/<int:pk>/',views.OrderItemDetails.as_view()),
    
]

urlpatterns+= router.urls
