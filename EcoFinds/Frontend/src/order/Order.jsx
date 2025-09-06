import { ArrowLeft, Menu, Search, Star, ChevronRight, MoreHorizontal, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/LandingPage/components/Navbar"

export default function Order() {
  return (
    <div className="min-h-screen bg-gray-50 ">
        <Navbar />      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Purchase History</h1>
          <Menu className="w-6 h-6" />
        </div>
        <div className="flex gap-6 text-sm">
          <div>
            <span className="opacity-90">Total Orders: </span>
            <span className="font-semibold">47</span>
          </div>
          <div>
            <span className="opacity-90">Total Spent: </span>
            <span className="font-semibold">$3,847.50</span>
          </div>
        </div>
      </div>


      <div className="bg-white px-4 py-3 border-b">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Filter & Sort</h2>
          <button className="text-sm text-blue-600">Clear All</button>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          <Badge variant="default" className="bg-blue-600 text-white whitespace-nowrap">
            All Orders
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap">
            Delivered
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap">
            In Transit
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap">
            Processing
          </Badge>
          <Badge variant="outline" className="whitespace-nowrap">
            Last 30 Days
          </Badge>
        </div>
      </div>


      <div className="bg-white px-4 py-3 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search your orders..." className="pl-10 bg-gray-50 border-0" />
        </div>
        <MoreHorizontal className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* Your Shopping Journey */}
      <div className="mx-4 my-4">
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Your Shopping Journey</h3>
            <ChevronRight className="w-5 h-5" />
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <div className="text-2xl font-bold">47</div>
              <div className="text-xs opacity-90">Total Orders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$2,847</div>
              <div className="text-xs opacity-90">Total Spent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-xs opacity-90">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white mx-4 rounded-xl mb-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Recent Orders</h3>
          <button className="text-sm text-blue-600 flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="divide-y">
          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-900 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Premium Wireless Headphones</h4>
              <p className="text-xs text-gray-500">Electronics • Brand New</p>
              <p className="text-xs text-gray-500">Purchased on Dec 15, 2024</p>
              <div className="flex gap-2 mt-1">
                <button className="text-xs text-blue-600">Reorder</button>
                <button className="text-xs text-gray-500">Rate</button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">$249.99</div>
              <Badge className="bg-green-100 text-green-700 text-xs">Delivered</Badge>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-800 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Organic Dark Roast Coffee</h4>
              <p className="text-xs text-gray-500">Food & Beverages • Organic</p>
              <p className="text-xs text-gray-500">Purchased on Dec 12, 2024</p>
              <div className="flex gap-2 mt-1">
                <button className="text-xs text-green-600">Track</button>
                <button className="text-xs text-gray-500">Support</button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">$24.99</div>
              <Badge className="bg-blue-100 text-blue-700 text-xs">In Transit</Badge>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Designer White Sneakers</h4>
              <p className="text-xs text-gray-500">Fashion • Size M</p>
              <p className="text-xs text-gray-500">Purchased on Dec 10, 2024</p>
              <div className="flex gap-2 mt-1">
                <button className="text-xs text-red-600">Cancel</button>
                <button className="text-xs text-gray-500">Modify</button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">$179.99</div>
              <Badge className="bg-orange-100 text-orange-700 text-xs">Processing</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by Category */}
      <div className="bg-white mx-4 rounded-xl mb-4 p-4">
        <h3 className="font-semibold mb-4">Shop by Category</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-teal-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Electronics</div>
            <div className="text-xs text-gray-500">12 orders</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Fashion</div>
            <div className="text-xs text-gray-500">8 orders</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Home</div>
            <div className="text-xs text-gray-500">15 orders</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Books</div>
            <div className="text-xs text-gray-500">3 orders</div>
          </div>
        </div>
      </div>

      {/* Monthly Spending */}
      <div className="bg-white mx-4 rounded-xl mb-4 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Monthly Spending</h3>
          <select className="text-sm border rounded px-2 py-1">
            <option>2024</option>
          </select>
        </div>
        <div className="flex justify-between">
          <div className="text-center">
            <div className="text-lg font-bold">$847.50</div>
            <div className="text-xs text-gray-500">Oct</div>
            <div className="text-xs text-green-600">+12%</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">$756.20</div>
            <div className="text-xs text-gray-500">Nov</div>
            <div className="text-xs text-red-600">-8%</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">$923.80</div>
            <div className="text-xs text-gray-500">Dec</div>
            <div className="text-xs text-green-600">+18%</div>
          </div>
        </div>
      </div>

      {/* All Orders */}
      <div className="bg-white mx-4 rounded-xl mb-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">All Orders</h3>
          <div className="flex gap-2">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
            <Grid3X3 className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="divide-y">
          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-900 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Smart Fitness Watch</h4>
              <p className="text-xs text-gray-500">Electronics • Waterproof</p>
              <p className="text-xs text-gray-500">Purchased on Dec 8, 2024</p>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">$199.99</div>
              <Badge className="bg-green-100 text-green-700 text-xs">Delivered</Badge>
              <button className="text-xs text-blue-600 block mt-1">View Details</button>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Portable Bluetooth Speaker</h4>
              <p className="text-xs text-gray-500">Audio • Waterproof</p>
              <p className="text-xs text-gray-500">Purchased on Dec 5, 2024</p>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-3 h-3 text-gray-300" />
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">$89.99</div>
              <Badge className="bg-green-100 text-green-700 text-xs">Delivered</Badge>
              <button className="text-xs text-blue-600 block mt-1">View Details</button>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-800 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Winter Puffer Jacket</h4>
              <p className="text-xs text-gray-500">Clothing • Size L</p>
              <p className="text-xs text-gray-500">Purchased on Nov 28, 2024</p>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">$159.99</div>
              <Badge className="bg-green-100 text-green-700 text-xs">Delivered</Badge>
              <button className="text-xs text-blue-600 block mt-1">View Details</button>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-900 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Gaming Mouse RGB</h4>
              <p className="text-xs text-gray-500">Gaming • Wireless</p>
              <p className="text-xs text-gray-500">Purchased on Nov 25, 2024</p>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-3 h-3 text-gray-300" />
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">$79.99</div>
              <Badge className="bg-green-100 text-green-700 text-xs">Delivered</Badge>
              <button className="text-xs text-blue-600 block mt-1">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Load More Orders Button */}
      <div className="px-4 mb-6">
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Load More Orders</Button>
      </div>

      {/* Order Analytics */}
      <div className="bg-white mx-4 rounded-xl mb-4 p-4">
        <h3 className="font-semibold mb-4">Order Analytics</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <div className="w-5 h-5 bg-teal-500 rounded"></div>
            </div>
            <div className="text-lg font-bold">47</div>
            <div className="text-xs text-gray-500">Total Orders</div>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <div className="w-5 h-5 bg-green-500 rounded"></div>
            </div>
            <div className="text-lg font-bold">42</div>
            <div className="text-xs text-gray-500">Avg. Delivered</div>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <div className="w-5 h-5 bg-yellow-500 rounded"></div>
            </div>
            <div className="text-lg font-bold">3</div>
            <div className="text-xs text-gray-500">Pending Orders</div>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <div className="w-5 h-5 bg-red-500 rounded"></div>
            </div>
            <div className="text-lg font-bold">2</div>
            <div className="text-xs text-gray-500">Cancelled</div>
          </div>
        </div>
      </div>

      {/* Your Favorite Brands */}
      <div className="bg-white mx-4 rounded-xl mb-4 p-4">
        <h3 className="font-semibold mb-4">Your Favorite Brands</h3>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div>
              <div className="text-sm font-medium">Apple</div>
              <div className="text-xs text-gray-500">12 orders</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
            <div>
              <div className="text-sm font-medium">Amazon</div>
              <div className="text-xs text-gray-500">8 orders</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div>
              <div className="text-sm font-medium">Nike</div>
              <div className="text-xs text-gray-500">5 orders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Loyalty Rewards */}
      <div className="mx-4 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Loyalty Rewards</h3>
              <p className="text-sm opacity-90">You've earned 2,847 points from your purchases!</p>
              <div className="flex gap-2 mt-3">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  View Rewards
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  Earn Points
                </Button>
              </div>
              <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-100 mt-2">
                Redeem Points
              </Button>
            </div>
            <div className="text-4xl">🎁</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white mx-4 rounded-xl mb-6 p-4">
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-teal-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Reorder</div>
            <div className="text-xs text-gray-500">Past items</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Track</div>
            <div className="text-xs text-gray-500">Your orders</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Review</div>
            <div className="text-xs text-gray-500">Rate items</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
            <div className="text-xs font-medium">Support</div>
            <div className="text-xs text-gray-500">Get help</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-blue-600">MarketPlace</span>
          <div className="flex gap-3 ml-auto">
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-xs">
          <div>
            <h4 className="font-semibold mb-2">Account</h4>
            <div className="space-y-1 text-gray-600">
              <div>Your Orders</div>
              <div>Your Account</div>
              <div>Your Lists</div>
              <div>Your Recommendations</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <div className="space-y-1 text-gray-600">
              <div>Help Center</div>
              <div>Contact Us</div>
              <div>Returns</div>
              <div>Shipping</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <div className="space-y-1 text-gray-600">
              <div>About Us</div>
              <div>Careers</div>
              <div>Press</div>
              <div>Investors</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <div className="space-y-1 text-gray-600">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookie Policy</div>
              <div>Accessibility</div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-6">© 2024 MarketPlace. All rights reserved.</div>
      </div>
    </div>
  )
}
