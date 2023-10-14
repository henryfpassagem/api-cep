Looking for data address using an API of CEP

You can look for your data address by typing your CEP and pressing the 'Cosultar CEP' button.

![image](https://github.com/henryfpassagem/api-cep/assets/68475407/77f70ecc-f9cf-42f2-80b2-9b0fbd4fd612)

The JS code makes a fetch on the [ViaCEP](https://viacep.com.br/) API. If the CEP value is invalid it returns an error warning generate by [Sweet Alert 2](https://sweetalert2.github.io/)' library.
