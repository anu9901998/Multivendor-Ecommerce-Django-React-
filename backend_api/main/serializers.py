from rest_framework import serializers
from . import models

#Serializers are converting model data to json data

#Vendor Serializer
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id','user','address']  # which fields I want to show
        depth = 1    #it will show the whole user details

class VendorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id','user','address'] # which fields I want to show
        depth = 1  #it will show the whole user details as user is foreign key. I basically unfold user details

#Vendor Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title','detail']  # which fields I want to show
        depth = 1    #it will show the whole user details

class CategoryDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title','detail'] # which fields I want to show
        depth = 1  #it will show the whole user details as user is foreign key. I basically unfold user details

#Product Serialiser        
class ProductListSerializer(serializers.ModelSerializer):
    #all the product rating data related to product (using related names)
    #rating_product = serializers.PrimaryKeyRelatedField(many = True,read_only=True) #return only primary key
    rating_product = serializers.StringRelatedField(many = True,read_only=True) # return if __str__ function in model
    class Meta:
        model = models.Product
        fields = ['id','category','vendor','title','detail','price','rating_product']  # which fields I want to show
        depth = 1    #it will show the whole user details

class ProductDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['id','category','vendor','title','detail','price']  # which fields I want to show
        depth = 1    #it will show the whole user details

#Customer Serializer
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user','mobile']  # which fields I want to show
        depth = 1    #it will show the whole user details

class CustomerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user','mobile']  # which fields I want to show
        depth = 1    #it will show the whole user details

#Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id','customer','order_time']  # which fields I want to show
        depth = 1    #it will show the whole user details

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id','order','product']   # which fields I want to show
        depth = 1    #it will show the whole user details

class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id','customer','address','default_address']   # which fields I want to show
        depth = 1    #it will show the whole user details


class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = ['id','customer','product','rating','reviews','add_time']   # which fields I want to show
        depth = 1    #it will show the whole user details

# #Order Serializer
# class OrderItemsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Order
#         fields = ['id','customer','product']  # which fields I want to show
#         depth = 1    #it will show the whole user details

# class OrderItemsDetailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Order
#         fields =  ['id','customer','product']  # which fields I want to show
#         depth = 1    #it will show the whole user details