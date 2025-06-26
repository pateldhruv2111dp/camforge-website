import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Eye, EyeOff, LogOut } from "lucide-react";

interface ContactInquiry {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string;
  message: string;
  serviceInterest: string | null;
  createdAt: string;
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (loginId === "Dhruv@2025@Camforge" && password === "Camforge@2025") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginId("");
    setPassword("");
    setError("");
  };

  const { data: inquiries = [], isLoading } = useQuery<ContactInquiry[]>({
    queryKey: ["/api/contact-inquiries"],
    enabled: isLoggedIn,
  });

  const getServiceDisplayName = (value: string | null) => {
    const serviceMap: { [key: string]: string } = {
      "cam-programming": "CAM Programming Services",
      "cad-services": "CAD Services",
      "corporate-training": "Corporate Training",
      "mastercam-training": "Mastercam Training",
      "carveco-training": "Carveco Training",
      "software-reseller": "Software Purchase",
      "consultation": "General Consultation",
    };
    return value ? serviceMap[value] || value : "Not specified";
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-secondary">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="loginId">Login ID</Label>
                <Input
                  id="loginId"
                  type="text"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="Enter login ID"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <Button type="submit" className="w-full bg-primary hover:bg-red-700">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-secondary">Contact Inquiries Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>All Contact Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              {inquiries && inquiries.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Date & Time</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Company</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Service Interest</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.map((inquiry: ContactInquiry) => (
                        <tr key={inquiry.id} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 text-sm">
                            {format(new Date(inquiry.createdAt), "MMM dd, yyyy 'at' hh:mm a")}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">
                            {inquiry.name}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a href={`mailto:${inquiry.email}`} className="text-blue-600 hover:underline">
                              {inquiry.email}
                            </a>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {inquiry.phone ? (
                              <a href={`tel:+91${inquiry.phone}`} className="text-blue-600 hover:underline">
                                +91 {inquiry.phone}
                              </a>
                            ) : (
                              "Not provided"
                            )}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {inquiry.company || "Not provided"}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {getServiceDisplayName(inquiry.serviceInterest)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">
                            {inquiry.subject}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 max-w-xs">
                            <div className="truncate" title={inquiry.message}>
                              {inquiry.message}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No contact inquiries yet.
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}