import { useLoaderData, useParams } from "react-router";
import { MapPin, Mail, User, Navigation, Home } from "lucide-react";

const UserDetails = () => {
  const user = useLoaderData();
  const params = useParams();
  console.log(params);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="card bg-white shadow-xl rounded-2xl overflow-hidden mb-6 border border-amber-100">
          <div
            className="h-32 bg-gradient-to-r from-amber-400 to-orange-400 relative"
            style={{
              backgroundImage: `
                radial-gradient(circle 400px at 20% 50%, rgba(255,255,255,0.3), transparent),
                radial-gradient(circle 400px at 80% 50%, rgba(251,191,36,0.3), transparent)
              `,
            }}
          >
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-6 px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {user.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    @{user.username}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="btn btn-sm bg-amber-500 hover:bg-amber-600 border-amber-500 text-white">
                  <Mail className="w-4 h-4" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="card bg-white shadow-lg rounded-2xl border border-amber-50">
            <div className="card-body">
              <h2 className="card-title text-xl text-gray-800 mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500" />
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Username</p>
                    <p className="text-gray-800 font-medium">
                      @{user.username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="card bg-white shadow-lg rounded-2xl border border-amber-50">
            <div className="card-body">
              <h2 className="card-title text-xl text-gray-800 mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 text-amber-500" />
                Address
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 bg-amber-50 rounded-lg">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Street</p>
                    <p className="text-gray-800 font-medium mb-3">
                      {user.address.street}, {user.address.suite}
                    </p>

                    <p className="text-sm text-gray-500">City & Zipcode</p>
                    <p className="text-gray-800 font-medium mb-3">
                      {user.address.city}, {user.address.zipcode}
                    </p>

                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-amber-200">
                      <div className="flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-gray-600">
                          Lat: {user.address.geo.lat}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-gray-600">
                          Lng: {user.address.geo.lng}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview (Optional - Visual representation of coordinates) */}
        <div className="card bg-white shadow-lg rounded-2xl border border-amber-50 mt-6">
          <div className="card-body">
            <h2 className="card-title text-xl text-gray-800 mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-amber-500" />
              Location Preview
            </h2>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-grid-amber-500/20"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">
                  {user.address.city} Coordinates
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {user.address.geo.lat}, {user.address.geo.lng}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
