// https://github.com/faker-js/faker/blob/main/src/locales/en/animal/bird.ts
const birds = [
  "Red-throated Loon",
  "Arctic Loon",
  "Pacific Loon",
  "Common Loon",
  "Yellow-billed Loon",
  "Least Grebe",
  "Pied-billed Grebe",
  "Horned Grebe",
  "Red-necked Grebe",
  "Eared Grebe",
  "Western Grebe",
  "Clark's Grebe",
  "Yellow-nosed Albatross",
  "Shy Albatross",
  "Black-browed Albatross",
  "Wandering Albatross",
  "Laysan Albatross",
  "Black-footed Albatross",
  "Short-tailed Albatross",
  "Northern Fulmar",
  "Herald Petrel",
  "Murphy's Petrel",
  "Mottled Petrel",
  "Black-capped Petrel",
  "Cook's Petrel",
  "Stejneger's Petrel",
  "White-chinned Petrel",
  "Streaked Shearwater",
  "Cory's Shearwater",
  "Pink-footed Shearwater",
  "Flesh-footed Shearwater",
  "Greater Shearwater",
  "Wedge-tailed Shearwater",
  "Buller's Shearwater",
  "Sooty Shearwater",
  "Short-tailed Shearwater",
  "Manx Shearwater",
  "Black-vented Shearwater",
  "Audubon's Shearwater",
  "Little Shearwater",
  "Wilson's Storm-Petrel",
  "White-faced Storm-Petrel",
  "European Storm-Petrel",
  "Fork-tailed Storm-Petrel",
  "Leach's Storm-Petrel",
  "Ashy Storm-Petrel",
  "Band-rumped Storm-Petrel",
  "Wedge-rumped Storm-Petrel",
  "Black Storm-Petrel",
  "Least Storm-Petrel",
  "White-tailed Tropicbird",
  "Red-billed Tropicbird",
  "Red-tailed Tropicbird",
  "Masked Booby",
  "Blue-footed Booby",
  "Brown Booby",
  "Red-footed Booby",
  "Northern Gannet",
  "American White Pelican",
  "Brown Pelican",
  "Brandt's Cormorant",
  "Neotropic Cormorant",
  "Double-crested Cormorant",
  "Great Cormorant",
  "Red-faced Cormorant",
  "Pelagic Cormorant",
  "Anhinga",
  "Magnificent Frigatebird",
  "Great Frigatebird",
  "Lesser Frigatebird",
  "American Bittern",
  "Yellow Bittern",
  "Least Bittern",
  "Great Blue Heron",
  "Great Egret",
  "Chinese Egret",
  "Little Egret",
  "Western Reef-Heron",
  "Snowy Egret",
  "Little Blue Heron",
  "Tricolored Heron",
  "Reddish Egret",
  "Cattle Egret",
  "Green Heron",
  "Black-crowned Night-Heron",
  "Yellow-crowned Night-Heron",
  "White Ibis",
  "Scarlet Ibis",
  "Glossy Ibis",
  "White-faced Ibis",
  "Roseate Spoonbill",
  "Jabiru",
  "Wood Stork",
  "Black Vulture",
  "Turkey Vulture",
  "California Condor",
  "Greater Flamingo",
  "Black-bellied Whistling-Duck",
  "Fulvous Whistling-Duck",
  "Bean Goose",
  "Pink-footed Goose",
  "Greater White-fronted Goose",
  "Lesser White-fronted Goose",
  "Emperor Goose",
  "Snow Goose",
  "Ross's Goose",
  "Canada Goose",
  "Brant",
  "Barnacle Goose",
  "Mute Swan",
  "Trumpeter Swan",
  "Tundra Swan",
  "Whooper Swan",
  "Muscovy Duck",
  "Wood Duck",
  "Gadwall",
  "Falcated Duck",
  "Eurasian Wigeon",
  "American Wigeon",
  "American Black Duck",
  "Mallard",
  "Mottled Duck",
  "Spot-billed Duck",
  "Blue-winged Teal",
  "Cinnamon Teal",
  "Northern Shoveler",
  "White-cheeked Pintail",
  "Northern Pintail",
  "Garganey",
  "Baikal Teal",
  "Green-winged Teal",
  "Canvasback",
  "Redhead",
  "Common Pochard",
  "Ring-necked Duck",
  "Tufted Duck",
  "Greater Scaup",
  "Lesser Scaup",
  "Steller's Eider",
  "Spectacled Eider",
  "King Eider",
  "Common Eider",
  "Harlequin Duck",
  "Labrador Duck",
  "Surf Scoter",
  "White-winged Scoter",
  "Black Scoter",
  "Oldsquaw",
  "Bufflehead",
  "Common Goldeneye",
  "Barrow's Goldeneye",
  "Smew",
  "Hooded Merganser",
  "Common Merganser",
  "Red-breasted Merganser",
  "Masked Duck",
  "Ruddy Duck",
  "Osprey",
  "Hook-billed Kite",
  "Swallow-tailed Kite",
  "White-tailed Kite",
  "Snail Kite",
  "Mississippi Kite",
  "Bald Eagle",
  "White-tailed Eagle",
  "Steller's Sea-Eagle",
  "Northern Harrier",
  "Sharp-shinned Hawk",
  "Cooper's Hawk",
  "Northern Goshawk",
  "Crane Hawk",
  "Gray Hawk",
  "Common Black-Hawk",
  "Harris's Hawk",
  "Roadside Hawk",
  "Red-shouldered Hawk",
  "Broad-winged Hawk",
  "Short-tailed Hawk",
  "Swainson's Hawk",
  "White-tailed Hawk",
  "Zone-tailed Hawk",
  "Red-tailed Hawk",
  "Ferruginous Hawk",
  "Rough-legged Hawk",
  "Golden Eagle",
  "Collared Forest-Falcon",
  "Crested Caracara",
  "Eurasian Kestrel",
  "American Kestrel",
  "Merlin",
  "Eurasian Hobby",
  "Aplomado Falcon",
  "Gyrfalcon",
  "Peregrine Falcon",
  "Prairie Falcon",
  "Plain Chachalaca",
  "Chukar",
  "Himalayan Snowcock",
  "Gray Partridge",
  "Ring-necked Pheasant",
  "Ruffed Grouse",
  "Sage Grouse",
  "Spruce Grouse",
  "Willow Ptarmigan",
  "Rock Ptarmigan",
  "White-tailed Ptarmigan",
  "Blue Grouse",
  "Sharp-tailed Grouse",
  "Greater Prairie-chicken",
  "Lesser Prairie-chicken",
  "Wild Turkey",
  "Mountain Quail",
  "Scaled Quail",
  "California Quail",
  "Gambel's Quail",
  "Northern Bobwhite",
  "Montezuma Quail",
  "Yellow Rail",
  "Black Rail",
  "Corn Crake",
  "Clapper Rail",
  "King Rail",
  "Virginia Rail",
  "Sora",
  "Paint-billed Crake",
  "Spotted Rail",
  "Purple Gallinule",
  "Azure Gallinule",
  "Common Moorhen",
  "Eurasian Coot",
  "American Coot",
  "Limpkin",
  "Sandhill Crane",
  "Common Crane",
  "Whooping Crane",
  "Double-striped Thick-knee",
  "Northern Lapwing",
  "Black-bellied Plover",
  "European Golden-Plover",
  "American Golden-Plover",
  "Pacific Golden-Plover",
  "Mongolian Plover",
  "Collared Plover",
  "Snowy Plover",
  "Wilson's Plover",
  "Common Ringed Plover",
  "Semipalmated Plover",
  "Piping Plover",
  "Little Ringed Plover",
  "Killdeer",
  "Mountain Plover",
  "Eurasian Dotterel",
  "Eurasian Oystercatcher",
  "American Oystercatcher",
  "Black Oystercatcher",
  "Black-winged Stilt",
  "Black-necked Stilt",
  "American Avocet",
  "Northern Jacana",
  "Common Greenshank",
  "Greater Yellowlegs",
  "Lesser Yellowlegs",
  "Marsh Sandpiper",
  "Spotted Redshank",
  "Wood Sandpiper",
  "Green Sandpiper",
  "Solitary Sandpiper",
  "Willet",
  "Wandering Tattler",
  "Gray-tailed Tattler",
  "Common Sandpiper",
  "Spotted Sandpiper",
  "Terek Sandpiper",
  "Upland Sandpiper",
  "Little Curlew",
  "Eskimo Curlew",
  "Whimbrel",
  "Bristle-thighed Curlew",
  "Far Eastern Curlew",
  "Slender-billed Curlew",
  "Eurasian Curlew",
  "Long-billed Curlew",
  "Black-tailed Godwit",
  "Hudsonian Godwit",
  "Bar-tailed Godwit",
  "Marbled Godwit",
  "Ruddy Turnstone",
  "Black Turnstone",
  "Surfbird",
  "Great Knot",
  "Red Knot",
  "Sanderling",
  "Semipalmated Sandpiper",
  "Western Sandpiper",
  "Red-necked Stint",
  "Little Stint",
  "Temminck's Stint",
  "Long-toed Stint",
  "Least Sandpiper",
  "White-rumped Sandpiper",
  "Baird's Sandpiper",
  "Pectoral Sandpiper",
  "Sharp-tailed Sandpiper",
  "Purple Sandpiper",
  "Rock Sandpiper",
  "Dunlin",
  "Curlew Sandpiper",
  "Stilt Sandpiper",
  "Spoonbill Sandpiper",
  "Broad-billed Sandpiper",
  "Buff-breasted Sandpiper",
  "Ruff",
  "Short-billed Dowitcher",
  "Long-billed Dowitcher",
  "Jack Snipe",
  "Common Snipe",
  "Pin-tailed Snipe",
  "Eurasian Woodcock",
  "American Woodcock",
  "Wilson's Phalarope",
  "Red-necked Phalarope",
  "Red Phalarope",
  "Oriental Pratincole",
  "Great Skua",
  "South Polar Skua",
  "Pomarine Jaeger",
  "Parasitic Jaeger",
  "Long-tailed Jaeger",
  "Laughing Gull",
  "Franklin's Gull",
  "Little Gull",
  "Black-headed Gull",
  "Bonaparte's Gull",
  "Heermann's Gull",
  "Band-tailed Gull",
  "Black-tailed Gull",
  "Mew Gull",
  "Ring-billed Gull",
  "California Gull",
  "Herring Gull",
  "Yellow-legged Gull",
  "Thayer's Gull",
  "Iceland Gull",
  "Lesser Black-backed Gull",
  "Slaty-backed Gull",
  "Yellow-footed Gull",
  "Western Gull",
  "Glaucous-winged Gull",
  "Glaucous Gull",
  "Great Black-backed Gull",
  "Sabine's Gull",
  "Black-legged Kittiwake",
  "Red-legged Kittiwake",
  "Ross's Gull",
  "Ivory Gull",
  "Gull-billed Tern",
  "Caspian Tern",
  "Royal Tern",
  "Elegant Tern",
  "Sandwich Tern",
  "Roseate Tern",
  "Common Tern",
  "Arctic Tern",
  "Forster's Tern",
  "Least Tern",
  "Aleutian Tern",
  "Bridled Tern",
  "Sooty Tern",
  "Large-billed Tern",
  "White-winged Tern",
  "Whiskered Tern",
  "Black Tern",
  "Brown Noddy",
  "Black Noddy",
  "Black Skimmer",
  "Dovekie",
  "Common Murre",
  "Thick-billed Murre",
  "Razorbill",
  "Great Auk",
  "Black Guillemot",
  "Pigeon Guillemot",
  "Long-billed Murrelet",
  "Marbled Murrelet",
  "Kittlitz's Murrelet",
  "Xantus's Murrelet",
  "Craveri's Murrelet",
  "Ancient Murrelet",
  "Cassin's Auklet",
  "Parakeet Auklet",
  "Least Auklet",
  "Whiskered Auklet",
  "Crested Auklet",
  "Rhinoceros Auklet",
  "Atlantic Puffin",
  "Horned Puffin",
  "Tufted Puffin",
  "Rock Dove",
  "Scaly-naped Pigeon",
  "White-crowned Pigeon",
  "Red-billed Pigeon",
  "Band-tailed Pigeon",
  "Oriental Turtle-Dove",
  "European Turtle-Dove",
  "Eurasian Collared-Dove",
  "Spotted Dove",
  "White-winged Dove",
  "Zenaida Dove",
  "Mourning Dove",
  "Passenger Pigeon",
  "Inca Dove",
  "Common Ground-Dove",
  "Ruddy Ground-Dove",
  "White-tipped Dove",
  "Key West Quail-Dove",
  "Ruddy Quail-Dove",
  "Budgerigar",
  "Monk Parakeet",
  "Carolina Parakeet",
  "Thick-billed Parrot",
  "White-winged Parakeet",
  "Red-crowned Parrot",
  "Common Cuckoo",
  "Oriental Cuckoo",
  "Black-billed Cuckoo",
  "Yellow-billed Cuckoo",
  "Mangrove Cuckoo",
  "Greater Roadrunner",
  "Smooth-billed Ani",
  "Groove-billed Ani",
  "Barn Owl",
  "Flammulated Owl",
  "Oriental Scops-Owl",
  "Western Screech-Owl",
  "Eastern Screech-Owl",
  "Whiskered Screech-Owl",
  "Great Horned Owl",
  "Snowy Owl",
  "Northern Hawk Owl",
  "Northern Pygmy-Owl",
  "Ferruginous Pygmy-Owl",
  "Elf Owl",
  "Burrowing Owl",
  "Mottled Owl",
  "Spotted Owl",
  "Barred Owl",
  "Great Gray Owl",
  "Long-eared Owl",
  "Short-eared Owl",
  "Boreal Owl",
  "Northern Saw-whet Owl",
  "Lesser Nighthawk",
  "Common Nighthawk",
  "Antillean Nighthawk",
  "Common Pauraque",
  "Common Poorwill",
  "Chuck-will's-widow",
  "Buff-collared Nightjar",
  "Whip-poor-will",
  "Jungle Nightjar",
  "Black Swift",
  "White-collared Swift",
  "Chimney Swift",
  "Vaux's Swift",
  "White-throated Needletail",
  "Common Swift",
  "Fork-tailed Swift",
  "White-throated Swift",
  "Antillean Palm Swift",
  "Green Violet-ear",
  "Green-breasted Mango",
  "Broad-billed Hummingbird",
  "White-eared Hummingbird",
  "Xantus's Hummingbird",
  "Berylline Hummingbird",
  "Buff-bellied Hummingbird",
  "Cinnamon Hummingbird",
  "Violet-crowned Hummingbird",
  "Blue-throated Hummingbird",
  "Magnificent Hummingbird",
  "Plain-capped Starthroat",
  "Bahama Woodstar",
  "Lucifer Hummingbird",
  "Ruby-throated Hummingbird",
  "Black-chinned Hummingbird",
  "Anna's Hummingbird",
  "Costa's Hummingbird",
  "Calliope Hummingbird",
  "Bumblebee Hummingbird",
  "Broad-tailed Hummingbird",
  "Rufous Hummingbird",
  "Allen's Hummingbird",
  "Elegant Trogon",
  "Eared Trogon",
  "Hoopoe",
  "Ringed Kingfisher",
  "Belted Kingfisher",
  "Green Kingfisher",
  "Eurasian Wryneck",
  "Lewis's Woodpecker",
  "Red-headed Woodpecker",
  "Acorn Woodpecker",
  "Gila Woodpecker",
  "Golden-fronted Woodpecker",
  "Red-bellied Woodpecker",
  "Williamson's Sapsucker",
  "Yellow-bellied Sapsucker",
  "Red-naped Sapsucker",
  "Red-breasted Sapsucker",
  "Great Spotted Woodpecker",
  "Ladder-backed Woodpecker",
  "Nuttall's Woodpecker",
  "Downy Woodpecker",
  "Hairy Woodpecker",
  "Strickland's Woodpecker",
  "Red-cockaded Woodpecker",
  "White-headed Woodpecker",
  "Three-toed Woodpecker",
  "Black-backed Woodpecker",
  "Northern Flicker",
  "Gilded Flicker",
  "Pileated Woodpecker",
  "Ivory-billed Woodpecker",
  "Northern Beardless-Tyrannulet",
  "Greenish Elaenia",
  "Caribbean Elaenia",
  "Tufted Flycatcher",
  "Olive-sided Flycatcher",
  "Greater Pewee",
  "Western Wood-Pewee",
  "Eastern Wood-Pewee",
  "Yellow-bellied Flycatcher",
  "Acadian Flycatcher",
  "Alder Flycatcher",
  "Willow Flycatcher",
  "Least Flycatcher",
  "Hammond's Flycatcher",
  "Dusky Flycatcher",
  "Gray Flycatcher",
  "Pacific-slope Flycatcher",
  "Cordilleran Flycatcher",
  "Buff-breasted Flycatcher",
  "Black Phoebe",
  "Eastern Phoebe",
  "Say's Phoebe",
  "Vermilion Flycatcher",
  "Dusky-capped Flycatcher",
  "Ash-throated Flycatcher",
  "Nutting's Flycatcher",
  "Great Crested Flycatcher",
  "Brown-crested Flycatcher",
  "La Sagra's Flycatcher",
  "Great Kiskadee",
  "Sulphur-bellied Flycatcher",
  "Variegated Flycatcher",
  "Tropical Kingbird",
  "Couch's Kingbird",
  "Cassin's Kingbird",
  "Thick-billed Kingbird",
  "Western Kingbird",
  "Eastern Kingbird",
  "Gray Kingbird",
  "Loggerhead Kingbird",
  "Scissor-tailed Flycatcher",
  "Fork-tailed Flycatcher",
  "Rose-throated Becard",
  "Masked Tityra",
  "Brown Shrike",
  "Loggerhead Shrike",
  "Northern Shrike",
  "White-eyed Vireo",
  "Thick-billed Vireo",
  "Bell's Vireo",
  "Black-capped Vireo",
  "Gray Vireo",
  "Yellow-throated Vireo",
  "Plumbeous Vireo",
  "Cassin's Vireo",
  "Blue-headed Vireo",
  "Hutton's Vireo",
  "Warbling Vireo",
  "Philadelphia Vireo",
  "Red-eyed Vireo",
  "Yellow-green Vireo",
  "Black-whiskered Vireo",
  "Yucatan Vireo",
  "Gray Jay",
  "Steller's Jay",
  "Blue Jay",
  "Green Jay",
  "Brown Jay",
  "Florida Scrub-Jay",
  "Island Scrub-Jay",
  "Western Scrub-Jay",
  "Mexican Jay",
  "Pinyon Jay",
  "Clark's Nutcracker",
  "Black-billed Magpie",
  "Yellow-billed Magpie",
  "Eurasian Jackdaw",
  "American Crow",
  "Northwestern Crow",
  "Tamaulipas Crow",
  "Fish Crow",
  "Chihuahuan Raven",
  "Common Raven",
  "Sky Lark",
  "Horned Lark",
  "Purple Martin",
  "Cuban Martin",
  "Gray-breasted Martin",
  "Southern Martin",
  "Brown-chested Martin",
  "Tree Swallow",
  "Violet-green Swallow",
  "Bahama Swallow",
  "Northern Rough-winged Swallow",
  "Bank Swallow",
  "Cliff Swallow",
  "Cave Swallow",
  "Barn Swallow",
  "Common House-Martin",
  "Carolina Chickadee",
  "Black-capped Chickadee",
  "Mountain Chickadee",
  "Mexican Chickadee",
  "Chestnut-backed Chickadee",
  "Boreal Chickadee",
  "Gray-headed Chickadee",
  "Bridled Titmouse",
  "Oak Titmouse",
  "Juniper Titmouse",
  "Tufted Titmouse",
  "Verdin",
  "Bushtit",
  "Red-breasted Nuthatch",
  "White-breasted Nuthatch",
  "Pygmy Nuthatch",
  "Brown-headed Nuthatch",
  "Brown Creeper",
  "Cactus Wren",
  "Rock Wren",
  "Canyon Wren",
  "Carolina Wren",
  "Bewick's Wren",
  "House Wren",
  "Winter Wren",
  "Sedge Wren",
  "Marsh Wren",
  "American Dipper",
  "Red-whiskered Bulbul",
  "Golden-crowned Kinglet",
  "Ruby-crowned Kinglet",
  "Middendorff's Grasshopper-Warbler",
  "Lanceolated Warbler",
  "Wood Warbler",
  "Dusky Warbler",
  "Arctic Warbler",
  "Blue-gray Gnatcatcher",
  "California Gnatcatcher",
  "Black-tailed Gnatcatcher",
  "Black-capped Gnatcatcher",
  "Narcissus Flycatcher",
  "Mugimaki Flycatcher",
  "Red-breasted Flycatcher",
  "Siberian Flycatcher",
  "Gray-spotted Flycatcher",
  "Asian Brown Flycatcher",
  "Siberian Rubythroat",
  "Bluethroat",
  "Siberian Blue Robin",
  "Red-flanked Bluetail",
  "Northern Wheatear",
  "Stonechat",
  "Eastern Bluebird",
  "Western Bluebird",
  "Mountain Bluebird",
  "Townsend's Solitaire",
  "Veery",
  "Gray-cheeked Thrush",
  "Bicknell's Thrush",
  "Swainson's Thrush",
  "Hermit Thrush",
  "Wood Thrush",
  "Eurasian Blackbird",
  "Eyebrowed Thrush",
  "Dusky Thrush",
  "Fieldfare",
  "Redwing",
  "Clay-colored Robin",
  "White-throated Robin",
  "Rufous-backed Robin",
  "American Robin",
  "Varied Thrush",
  "Aztec Thrush",
  "Wrentit",
  "Gray Catbird",
  "Black Catbird",
  "Northern Mockingbird",
  "Bahama Mockingbird",
  "Sage Thrasher",
  "Brown Thrasher",
  "Long-billed Thrasher",
  "Bendire's Thrasher",
  "Curve-billed Thrasher",
  "California Thrasher",
  "Crissal Thrasher",
  "Le Conte's Thrasher",
  "Blue Mockingbird",
  "European Starling",
  "Crested Myna",
  "Siberian Accentor",
  "Yellow Wagtail",
  "Citrine Wagtail",
  "Gray Wagtail",
  "White Wagtail",
  "Black-backed Wagtail",
  "Tree Pipit",
  "Olive-backed Pipit",
  "Pechora Pipit",
  "Red-throated Pipit",
  "American Pipit",
  "Sprague's Pipit",
  "Bohemian Waxwing",
  "Cedar Waxwing",
  "Gray Silky-flycatcher",
  "Phainopepla",
  "Olive Warbler",
  "Bachman's Warbler",
  "Blue-winged Warbler",
  "Golden-winged Warbler",
  "Tennessee Warbler",
  "Orange-crowned Warbler",
  "Nashville Warbler",
  "Virginia's Warbler",
  "Colima Warbler",
  "Lucy's Warbler",
  "Crescent-chested Warbler",
  "Northern Parula",
  "Tropical Parula",
  "Yellow Warbler",
  "Chestnut-sided Warbler",
  "Magnolia Warbler",
  "Cape May Warbler",
  "Black-throated Blue Warbler",
  "Yellow-rumped Warbler",
  "Black-throated Gray Warbler",
  "Golden-cheeked Warbler",
  "Black-throated Green Warbler",
  "Townsend's Warbler",
  "Hermit Warbler",
  "Blackburnian Warbler",
  "Yellow-throated Warbler",
  "Grace's Warbler",
  "Pine Warbler",
  "Kirtland's Warbler",
  "Prairie Warbler",
  "Palm Warbler",
  "Bay-breasted Warbler",
  "Blackpoll Warbler",
  "Cerulean Warbler",
  "Black-and-white Warbler",
  "American Redstart",
  "Prothonotary Warbler",
  "Worm-eating Warbler",
  "Swainson's Warbler",
  "Ovenbird",
  "Northern Waterthrush",
  "Louisiana Waterthrush",
  "Kentucky Warbler",
  "Connecticut Warbler",
  "Mourning Warbler",
  "MacGillivray's Warbler",
  "Common Yellowthroat",
  "Gray-crowned Yellowthroat",
  "Hooded Warbler",
  "Wilson's Warbler",
  "Canada Warbler",
  "Red-faced Warbler",
  "Painted Redstart",
  "Slate-throated Redstart",
  "Fan-tailed Warbler",
  "Golden-crowned Warbler",
  "Rufous-capped Warbler",
  "Yellow-breasted Chat",
  "Bananaquit",
  "Hepatic Tanager",
  "Summer Tanager",
  "Scarlet Tanager",
  "Western Tanager",
  "Flame-colored Tanager",
  "Stripe-headed Tanager",
  "White-collared Seedeater",
  "Yellow-faced Grassquit",
  "Black-faced Grassquit",
  "Olive Sparrow",
  "Green-tailed Towhee",
  "Spotted Towhee",
  "Eastern Towhee",
  "Canyon Towhee",
  "California Towhee",
  "Abert's Towhee",
  "Rufous-winged Sparrow",
  "Cassin's Sparrow",
  "Bachman's Sparrow",
  "Botteri's Sparrow",
  "Rufous-crowned Sparrow",
  "Five-striped Sparrow",
  "American Tree Sparrow",
  "Chipping Sparrow",
  "Clay-colored Sparrow",
  "Brewer's Sparrow",
  "Field Sparrow",
  "Worthen's Sparrow",
  "Black-chinned Sparrow",
  "Vesper Sparrow",
  "Lark Sparrow",
  "Black-throated Sparrow",
  "Sage Sparrow",
  "Lark Bunting",
  "Savannah Sparrow",
  "Grasshopper Sparrow",
  "Baird's Sparrow",
  "Henslow's Sparrow",
  "Le Conte's Sparrow",
  "Nelson's Sharp-tailed Sparrow",
  "Saltmarsh Sharp-tailed Sparrow",
  "Seaside Sparrow",
  "Fox Sparrow",
  "Song Sparrow",
  "Lincoln's Sparrow",
  "Swamp Sparrow",
  "White-throated Sparrow",
  "Harris's Sparrow",
  "White-crowned Sparrow",
  "Golden-crowned Sparrow",
  "Dark-eyed Junco",
  "Yellow-eyed Junco",
  "McCown's Longspur",
  "Lapland Longspur",
  "Smith's Longspur",
  "Chestnut-collared Longspur",
  "Pine Bunting",
  "Little Bunting",
  "Rustic Bunting",
  "Yellow-breasted Bunting",
  "Gray Bunting",
  "Pallas's Bunting",
  "Reed Bunting",
  "Snow Bunting",
  "McKay's Bunting",
  "Crimson-collared Grosbeak",
  "Northern Cardinal",
  "Pyrrhuloxia",
  "Yellow Grosbeak",
  "Rose-breasted Grosbeak",
  "Black-headed Grosbeak",
  "Blue Bunting",
  "Blue Grosbeak",
  "Lazuli Bunting",
  "Indigo Bunting",
  "Varied Bunting",
  "Painted Bunting",
  "Dickcissel",
  "Bobolink",
  "Red-winged Blackbird",
  "Tricolored Blackbird",
  "Tawny-shouldered Blackbird",
  "Eastern Meadowlark",
  "Western Meadowlark",
  "Yellow-headed Blackbird",
  "Rusty Blackbird",
  "Brewer's Blackbird",
  "Common Grackle",
  "Boat-tailed Grackle",
  "Great-tailed Grackle",
  "Shiny Cowbird",
  "Bronzed Cowbird",
  "Brown-headed Cowbird",
  "Black-vented Oriole",
  "Orchard Oriole",
  "Hooded Oriole",
  "Streak-backed Oriole",
  "Spot-breasted Oriole",
  "Altamira Oriole",
  "Audubon's Oriole",
  "Baltimore Oriole",
  "Bullock's Oriole",
  "Scott's Oriole",
  "Common Chaffinch",
  "Brambling",
  "Gray-crowned Rosy-Finch",
  "Black Rosy-Finch",
  "Brown-capped Rosy-Finch",
  "Pine Grosbeak",
  "Common Rosefinch",
  "Purple Finch",
  "Cassin's Finch",
  "House Finch",
  "Red Crossbill",
  "White-winged Crossbill",
  "Common Redpoll",
  "Hoary Redpoll",
  "Eurasian Siskin",
  "Pine Siskin",
  "Lesser Goldfinch",
  "Lawrence's Goldfinch",
  "American Goldfinch",
  "Oriental Greenfinch",
  "Eurasian Bullfinch",
  "Evening Grosbeak",
  "Hawfinch",
  "House Sparrow",
  "Eurasian Tree Sparrow",
];

// https://github.com/faker-js/faker/blob/main/src/locales/en/animal/cat.ts
const cats = [
  "Abyssinian",
  "American Bobtail",
  "American Curl",
  "American Shorthair",
  "American Wirehair",
  "Balinese",
  "Bengal",
  "Birman",
  "Bombay",
  "British Shorthair",
  "Burmese",
  "Chartreux",
  "Chausie",
  "Cornish Rex",
  "Devon Rex",
  "Donskoy",
  "Egyptian Mau",
  "Exotic Shorthair",
  "Havana",
  "Highlander",
  "Himalayan",
  "Japanese Bobtail",
  "Korat",
  "Kurilian Bobtail",
  "LaPerm",
  "Maine Coon",
  "Manx",
  "Minskin",
  "Munchkin",
  "Nebelung",
  "Norwegian Forest Cat",
  "Ocicat",
  "Ojos Azules",
  "Oriental",
  "Persian",
  "Peterbald",
  "Pixiebob",
  "Ragdoll",
  "Russian Blue",
  "Savannah",
  "Scottish Fold",
  "Selkirk Rex",
  "Serengeti",
  "Siberian",
  "Siamese",
  "Singapura",
  "Snowshoe",
  "Sokoke",
  "Somali",
  "Sphynx",
  "Thai",
  "Tonkinese",
  "Toyger",
  "Turkish Angora",
  "Turkish Van",
];

export function getRandom(type: "bird" | "cat") {
  if (type === "bird") {
    return birds[Math.floor(Math.random() * birds.length)] + "-" + Date.now();
  } else {
    return cats[Math.floor(Math.random() * cats.length)];
  }
}
