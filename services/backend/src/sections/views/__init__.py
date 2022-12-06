from .realty.views_realty import RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy
from .stock.views_stock import StockAPIList, StockAPIUpdateDestroy
from .category.views_category import CategoryFullAPIList
from .new.new_views import NewAPIList

__all__ = [
    'RealtyFullAPIList',
    'RealtyFullAPIListCreate',
    'RealtyFullAPIUpdateDestroy',
    'StockAPIList',
    'StockAPIUpdateDestroy',
    'CategoryFullAPIList',
    'NewAPIList',
]
