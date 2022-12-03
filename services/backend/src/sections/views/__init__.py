from .realty.views_realty import *
from .stock.views_stock import *
from .base_views import *

__all__ = [
    'RealtyFullAPIList',
    'RealtyFullAPIListCreate',
    'RealtyFullAPIUpdateDestroy',
    'CategoryFullAPIList',
    'StockAPIList',
    'StockAPIUpdateDestroy',
    'CategoryFullDestroyAPIList',
]
