import unittest
from unittest.mock import patch

from b import SystemUnderTest


class TestB(unittest.TestCase):
    @patch("a.SomeClass")
    def test_patching_a(self, some_class_mock):
        some_class_mock_instance = some_class_mock.return_value
        some_class_mock_instance.some_method.return_value = "mock"
        sut = SystemUnderTest()
        # Call below will raise NotImplementedError since it is not patched
        actual = sut.do_something()
        assert actual == "mock"

    @patch("b.SomeClass")
    def test_patching_b(self, some_class_mock):
        some_class_mock_instance = some_class_mock.return_value
        some_class_mock_instance.some_method.return_value = "mock"
        sut = SystemUnderTest()
        actual = sut.do_something()
        assert actual == "mock"
