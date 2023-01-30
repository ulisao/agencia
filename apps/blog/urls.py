from django.urls import path

from .views import *

urlpatterns = [
    path('list',BlogListView.as_view()),
    path('by_category',ListPostsByCategoryView.as_view()),
    path('detail/<slug>',PostDetailView.as_view()),
    path('search',SearchBlogView.as_view()),
    path('author_list', AuthorBlogListView.as_view()),
    path('edit', EditPostView.as_view()),
    path('draft', DraftPostView.as_view()),
    path('publish', PublishPostView.as_view()),
    path('delete/<slug>', DeletePostView.as_view()),
    path('create', CreatePostView.as_view()),
    
]
