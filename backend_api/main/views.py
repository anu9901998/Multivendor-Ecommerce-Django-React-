from rest_framework import generics,pagination,viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import permissions
from . import serializers
from . import models


#using class view
class VendorList(generics.ListCreateAPIView): # ListCreateAPIView : Listing and creating Data
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    #view level authentication
    # permission_classes = [permissions.IsAuthenticated]

class VendorDetails(generics.RetrieveUpdateDestroyAPIView): #RetrieveUpdateDestroyAPIView : fetching updating and destroying single data
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailsSerializer

class CategoryList(generics.ListCreateAPIView): # ListCreateAPIView : Listing and creating Data
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer
    #view level authentication
    # permission_classes = [permissions.IsAuthenticated]

class CategoryDetails(generics.RetrieveUpdateDestroyAPIView): #RetrieveUpdateDestroyAPIView : fetching updating and destroying single data
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailsSerializer

class ProductList(generics.ListCreateAPIView): # ListCreateAPIView : Listing and creating Data
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    #overriding Limit offset pagination to Product List view
    pagination_class = pagination.LimitOffsetPagination
    #view level authentication
    # permission_classes = [permissions.IsAuthenticated]

class ProductDetails(generics.RetrieveUpdateDestroyAPIView): #RetrieveUpdateDestroyAPIView : fetching updating and destroying single data
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailsSerializer

class CustomerList(generics.ListCreateAPIView): # ListCreateAPIView : Listing and creating Data
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer


class CustomerDetails(generics.RetrieveUpdateDestroyAPIView): #RetrieveUpdateDestroyAPIView : fetching updating and destroying single data
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailsSerializer

class OrderList(generics.ListCreateAPIView): # ListCreateAPIView : Listing and creating Data
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer


class OrderDetails(generics.RetrieveUpdateDestroyAPIView): #RetrieveUpdateDestroyAPIView : fetching updating and destroying single data
    serializer_class = serializers.OrderDetailsSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order_d = models.Order.objects.get(id = order_id)
        order_items= models.OrderItems.objects.filter(order = order_d)
        return order_items

#Using vieset we dont have to write details of the model only one model can manage both
class CustomerAddressViewSet(viewsets.ModelViewSet): # ListCreateAPIView : Listing and creating Data
    queryset = models.CustomerAddress.objects.all()
    serializer_class = serializers.OrderSerializer

class ProductRatingViewSet(viewsets.ModelViewSet): # ListCreateAPIView : Listing and creating Data
    queryset = models.ProductRating.objects.all()
    serializer_class = serializers.ProductRatingSerializer


# class OrderItemList(generics.ListCreateAPIView): 
#     queryset = models.OrderItems.objects.all()
#     serializer_class = serializers.OrderItemsSerializer


# class OrderItemDetails(generics.RetrieveUpdateDestroyAPIView): 
#     serializer_class = serializers.OrderItemsDetailsSerializer
    
        


# @api_view(['GET',])
# def VendorList(request):
#     try:
#         vendor_list = models.Vendor.objects.all()
#     except models.Vendor.DoesNotExist:
#         return Response()
    
#     if request.method == 'GET':
#         serializer = serializers.VendorSerializer(vendor_list,many=True)
#         return Response(serializer.data)


   


