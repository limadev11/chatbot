curl -i -X POST `
  https://graph.facebook.com/v22.0/960564317149828/messages `
  -H 'Authorization: Bearer EAASpts5QfxEBRKUorlHLu7VvyJk4xb4w6TLYf00tdTHI1rvutL031Hq5vi7ZASvdvSp62dm5NdD15O4pzRd9sIHNKDFxevf96bZCNSheGa0gZCTq2M0ZCamallneLZAEJaEk7nZCnZCGb6e3HidcRURrIYYaD5TKpZBpbZCZBZCdsriNQEKb6w727BGILUcZBvgRhEXDJECIZCPS0GZCCp3qyKzIXEvi53WsCvqIQ9hCMzZCZCuHwuPJ4DK4At8PyCwoJ41zvo9f5gp84iks3EkZAt80aPN7i' `
  -H 'Content-Type: application/json' `
  -d '{ \"messaging_product\": \"whatsapp\", \"to\": \"\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }'