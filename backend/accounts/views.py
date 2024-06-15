from django.shortcuts import render
import json

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Signup
from django.contrib.auth.hashers import make_password


# class ListUsers(APIView):
#     """
#     View to list all users in the system.

#     * Requires token authentication.
#     * Only admin users are able to access this view.
#     """
#     authentication_classes = [authentication.TokenAuthentication]
#     permission_classes = [permissions.IsAdminUser]

#     def get(self, request, format=None):
#         """
#         Return a list of all users.
#         """
#         usernames = [user.username for user in User.objects.all()]
#         return Response(usernames)



# class CustomAuthToken(ObtainAuthToken):

#     def post(self, request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data,
#                                            context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({
#             'token': token.key,
#             'user_id': user.pk,
#             'email': user.email
#         })


def home(request):
  if request.method=="GET":
    return HttpResponse(json.dumps(
      {
        "Message":"Hello"
      }
    ))
  

# @csrf_exempt
# def register(request):
#   if request.method == "POST":
#     print(request.POST.get("username"))
#   return HttpResponse("Done!")  
    

@csrf_exempt
def register(request):
    if request.method=="POST":
        try:
            
            signupname=request.POST.get("username")
            # # signupemail=request.POST.get("signupemail")
            signuppassword=request.POST.get("password")
            signup_obj=Signup(signupname=signupname,signuppassword=signuppassword)
            # signup_obj=User(signupname=signupname,signuppassword=signuppassword)
            signup_obj.save()
            # print("saved")
            # user = User.objects.create(username=signupname,password=make_password(signuppassword))
            # user.is_staff = True
            # user.is_superuser = True
            # user.save()

            return HttpResponse("Done!")
        except:
            return HttpResponse("INVALID JSON!")