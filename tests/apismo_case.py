import unittest


class ApismoCase(unittest.TestCase):

    def setUp(self):
        self.setUpTest()

    def tearDown(self):
        pass

    def setUpTest(self):
        pass

    def default_request(self, method='get', host='some_cool_host'):
        return {
            'method': method,
            'payload': 'Need to build some beaultiful payload to show to the server',
            'parameters': [
                {'name': 'query',
                 'type': 'string',
                 'in': 'path',
                 'format': 'string',
                 'description': 'Consulta do tribunal. Ex.: TJSP_PrimeiraInstancia.',
                 'required': True
                 },
                {'name': 'active',
                 'type': 'string',
                 'in': 'path',
                 'format': 'string',
                 'description': "Ativar ou desativar a consulta. 'active' ou 'inactive'.",
                 'required': True
                 },
                {'name': 'payload',
                 'in': 'body',
                 'schema': {
                     'type': 'object',
                     'properties': {
                         'anything': {'type': 'string'}
                     }
                 }
                 }
            ],
            'host': 'some_cool_host',
            'headers': [
                {'some': 'value'}
            ],
            'path': '/set_active/{query}/{active}'
        }