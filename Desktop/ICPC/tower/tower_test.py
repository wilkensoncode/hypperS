import unittest
import main


class TowerTest(unittest.TestCase):

    def test_tower(self):
        param = '12 8 2 4 10 3 25 14'
        result = main.stack_boxes(param)
        self.assertNotEqual(result, '12 10 3 8 4 2')

    def test_tower1(self):
        param = '12 17 36 37 51 63 92 124'
        result = main.stack_boxes(param)
        self.assertNotEqual(result, '63 17 12 51 37 36')

    def test_tower3(self):
        param = '25 25'
        result = main.stack_boxes(param)
        self.assertNotEqual(result, '25 25')


unittest.main()
