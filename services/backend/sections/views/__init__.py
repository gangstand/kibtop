from .stock.views_stock import StockAPIList, StockAPIUpdateDestroy
from .category.views_category import CategoryFullAPIList
from .new.new_views import NewAPIList
from .recommend.views_recommend import RecommendFullAPIList
from .my_ads.my_ads_views import MyAdsAPIList
from .user_archive.user_archive_views import UserArchiveAPIList

from .realty.views_realty import (
    RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy, RealtyFullViewsUserAPIList,
    RealtyFullFavouritesUserAPIList, RealtyFullFavouritesUserAPIUpdateDestroy, RealtyFullArchiveUserAPIDestroy
)
from .views_base import (
    CityAPIList, MoneyAPIList, MoneyAPIUpdateDestroy
)
from .avto.views_avto import (
    AvtoFullAPIList, AvtoFullAPIListCreate, AvtoFullAPIUpdateDestroy, AvtoFullViewsUserAPIList,
    AvtoFullFavouritesUserAPIList, AvtoFullFavouritesUserAPIUpdateDestroy, AvtoFullArchiveUserAPIDestroy
)
from .work.views_work import (
    WorkFullAPIList, WorkFullAPIListCreate, WorkFullAPIUpdateDestroy, WorkFullViewsUserAPIList,
    WorkFullFavouritesUserAPIList, WorkFullFavouritesUserAPIUpdateDestroy, WorkFullArchiveUserAPIDestroy
)
from .services.views_services import (
    ServicesFullAPIList, ServicesFullAPIListCreate, ServicesFullAPIUpdateDestroy, ServicesFullViewsUserAPIList,
    ServicesFullFavouritesUserAPIList, ServicesFullFavouritesUserAPIUpdateDestroy, ServicesFullArchiveUserAPIDestroy
)
from .children.views_children import (
    ChildrenFullAPIList, ChildrenFullAPIListCreate, ChildrenFullAPIUpdateDestroy,
    ChildrenFullViewsUserAPIList, ChildrenFullFavouritesUserAPIList, ChildrenFullFavouritesUserAPIUpdateDestroy,
    ChildrenFullArchiveUserAPIDestroy
)
from .fashion.views_fashion import (
    FashionFullAPIList, FashionFullAPIListCreate, FashionFullAPIUpdateDestroy, FashionFullViewsUserAPIList,
    FashionFullFavouritesUserAPIList, FashionFullFavouritesUserAPIUpdateDestroy, FashionFullArchiveUserAPIDestroy
)
from .electronics.views_electronics import (
    ElectronicsFullAPIList, ElectronicsFullAPIListCreate,
    ElectronicsFullAPIUpdateDestroy, ElectronicsFullViewsUserAPIList, ElectronicsFullFavouritesUserAPIList,
    ElectronicsFullFavouritesUserAPIUpdateDestroy, ElectronicsFullArchiveUserAPIDestroy
)
from .house_garden.views_house_garden import (
    HouseGardenFullAPIUpdateDestroy, HouseGardenFullAPIList,
    HouseGardenFullAPIListCreate, HouseGardenFullViewsUserAPIList, HouseGardenFullFavouritesUserAPIList,
    HouseGardenFullFavouritesUserAPIUpdateDestroy, HouseGardenFullArchiveUserAPIDestroy
)

__all__ = [
    'RealtyFullAPIList',
    'RealtyFullAPIListCreate',
    'RealtyFullAPIUpdateDestroy',
    'RealtyFullViewsUserAPIList',
    'RealtyFullFavouritesUserAPIList',
    'RealtyFullFavouritesUserAPIUpdateDestroy',
    'RealtyFullArchiveUserAPIDestroy',

    'StockAPIList',
    'StockAPIUpdateDestroy',

    'CategoryFullAPIList',

    'NewAPIList',

    'CityAPIList',

    'MoneyAPIList',
    'MoneyAPIUpdateDestroy',

    'RecommendFullAPIList',
    'MyAdsAPIList',
    'UserArchiveAPIList',
    'AvtoFullViewsUserAPIList',

    'AvtoFullAPIList',
    'AvtoFullAPIListCreate',
    'AvtoFullAPIUpdateDestroy',
    'AvtoFullFavouritesUserAPIList',
    'AvtoFullFavouritesUserAPIUpdateDestroy',
    'AvtoFullArchiveUserAPIDestroy',

    'WorkFullAPIList',
    'WorkFullAPIListCreate',
    'WorkFullAPIUpdateDestroy',
    'WorkFullViewsUserAPIList',
    'WorkFullFavouritesUserAPIList',
    'WorkFullFavouritesUserAPIUpdateDestroy',
    'WorkFullArchiveUserAPIDestroy',

    'ServicesFullAPIList',
    'ServicesFullAPIListCreate',
    'ServicesFullAPIUpdateDestroy',
    'ServicesFullViewsUserAPIList',
    'ServicesFullFavouritesUserAPIList',
    'ServicesFullFavouritesUserAPIUpdateDestroy',
    'ServicesFullArchiveUserAPIDestroy',

    'ChildrenFullAPIList',
    'ChildrenFullAPIListCreate',
    'ChildrenFullAPIUpdateDestroy',
    'ChildrenFullViewsUserAPIList',
    'ChildrenFullFavouritesUserAPIList',
    'ChildrenFullFavouritesUserAPIUpdateDestroy',
    'ChildrenFullArchiveUserAPIDestroy',

    'ElectronicsFullAPIList',
    'ElectronicsFullAPIListCreate',
    'ElectronicsFullAPIUpdateDestroy',
    'ElectronicsFullViewsUserAPIList',
    'ElectronicsFullFavouritesUserAPIList',
    'ElectronicsFullFavouritesUserAPIUpdateDestroy',
    'ElectronicsFullArchiveUserAPIDestroy',

    'FashionFullAPIList',
    'FashionFullAPIListCreate',
    'FashionFullAPIUpdateDestroy',
    'FashionFullViewsUserAPIList',
    'FashionFullFavouritesUserAPIList',
    'FashionFullFavouritesUserAPIUpdateDestroy',
    'FashionFullArchiveUserAPIDestroy',

    'HouseGardenFullAPIUpdateDestroy',
    'HouseGardenFullAPIList',
    'HouseGardenFullAPIListCreate',
    'HouseGardenFullViewsUserAPIList',
    'HouseGardenFullFavouritesUserAPIList',
    'HouseGardenFullFavouritesUserAPIUpdateDestroy',
    'HouseGardenFullArchiveUserAPIDestroy',
]
