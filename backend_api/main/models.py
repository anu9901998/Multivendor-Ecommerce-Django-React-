from django.db import models
from django.contrib.auth.models import User

# Vendor model
class Vendor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self) -> str:
        return self.user.username

#ProductCategory
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)

    def __str__(self) -> str:
        return self.title

#Product
class Product(models.Model):
    category = models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True,related_name = 'category_products')
    vendor = models.ForeignKey(Vendor,on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()

    def __str__(self) -> str:
        return self.title
    
#Customer
class Customer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()

    def __str__(self) -> str:
        return self.user.username

#Order
class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    order_time = models.DateField(auto_now_add = True)
    

#OrderItems
class OrderItems(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE, related_name= 'order_items')
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.product.title

#Customer Address
class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE, related_name= 'customer_items')
    address = models.TextField(null=True)
    default_address = models.BooleanField(default = False)
    
    def __str__(self) -> str:
        return self.address
    
#review and rating
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE, related_name= 'rating_customer')
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name= 'rating_product')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add = True)
    
    def __str__(self) -> str:
        return f'{self.rating} - {self.reviews}'

    



