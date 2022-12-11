from .realty.views_realty import RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy
from .stock.views_stock import StockAPIList, StockAPIUpdateDestroy
from .category.views_category import CategoryFullAPIList
from .new.new_views import NewAPIList
from .views_base import CityAPIList, MoneyAPIList, MoneyAPIUpdateDestroy
from .recommend.views_recommend import RecommendFullAPIList
from .avto.views_avto import AvtoFullAPIList, AvtoFullAPIListCreate, AvtoFullAPIUpdateDestroy

__all__ = [
    'RealtyFullAPIList',
    'RealtyFullAPIListCreate',
    'RealtyFullAPIUpdateDestroy',
    'StockAPIList',
    'StockAPIUpdateDestroy',
    'CategoryFullAPIList',
    'NewAPIList',
    'CityAPIList',
    'MoneyAPIList',
    'MoneyAPIUpdateDestroy',
    'RecommendFullAPIList',
    'AvtoFullAPIList',
    'AvtoFullAPIListCreate',
    'AvtoFullAPIUpdateDestroy',
]
