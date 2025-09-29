import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Progress } from './components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Textarea } from './components/ui/textarea';
import { toast } from 'sonner@2.0.3';
import { 
  Home, 
  Camera, 
  ClipboardList, 
  MessageSquare, 
  Megaphone, 
  BarChart3,
  Users,
  MapPin,
  Calendar,
  Bell,
  Settings,
  LogIn,
  User,
  Upload,
  Send,
  Globe,
  Mic,
  Volume2,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [userType, setUserType] = useState('citizen'); // citizen or authority
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isOnline, setIsOnline] = useState(true);

  // Mock data
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Road Construction - Main Street",
      progress: 65,
      status: "In Progress",
      location: "Village Center",
      lastUpdate: "2 hours ago",
      images: 3
    },
    {
      id: 2,
      name: "Water Supply Pipeline",
      progress: 30,
      status: "Started",
      location: "Ward 2",
      lastUpdate: "1 day ago",
      images: 1
    }
  ]);

  const [grievances, setGrievances] = useState([
    {
      id: 1,
      title: "Street Light Issue",
      description: "Street lights not working in our area",
      status: "pending",
      date: "2024-01-15",
      location: "Ward 3"
    }
  ]);

  const [announcements] = useState([
    {
      id: 1,
      title: "New Vaccination Drive",
      content: "Free vaccination camp on January 20th at Community Center",
      date: "2024-01-10",
      priority: "high"
    },
    {
      id: 2,
      title: "Water Supply Maintenance", 
      content: "Scheduled maintenance on January 18th from 10 AM to 2 PM",
      date: "2024-01-12",
      priority: "medium"
    }
  ]);

  // Language content with simplified terms
  const content = {
    en: {
      appName: "GraMitra",
      tagline: "Making Our Village Better",
      citizen: "Village Person",
      authority: "Government Officer",
      dashboard: "Home",
      projects: "Work Updates",
      surveys: "Village Survey",
      grievances: "Report Problem",
      announcements: "Important News",
      // Simplified descriptions
      projectTrackingDesc: "See work happening in village",
      surveyDesc: "Tell us about village needs",
      grievanceDesc: "Tell us your problems",
      announcementDesc: "Get important village news",
      // Action words
      takePhoto: "Take Photo",
      recordVoice: "Speak Problem", 
      listenNews: "Listen to News",
      helpMe: "Help Me",
      submit: "Send",
      done: "Finished",
      yes: "Yes",
      no: "No",
      good: "Good",
      bad: "Bad"
    },
    hi: {
      appName: "ग्रामित्र",
      tagline: "हमारे गांव को बेहतर बनाना",
      citizen: "गांव का व्यक्ति",
      authority: "सरकारी अधिकारी",
      dashboard: "घर",
      projects: "काम की जानकारी",
      surveys: "गांव का सर्वे",
      grievances: "समस्या बताएं",
      announcements: "महत्वपूर्ण समाचार",
      // Simplified descriptions
      projectTrackingDesc: "गांव में हो रहे काम देखें",
      surveyDesc: "गांव की जरूरतें बताएं",
      grievanceDesc: "अपनी समस्याएं बताएं",
      announcementDesc: "गांव की महत्वपूर्ण खबरें पाएं",
      // Action words
      takePhoto: "फोटो लें",
      recordVoice: "समस्या बोलें",
      listenNews: "समाचार सुनें",
      helpMe: "मदद करें",
      submit: "भेजें",
      done: "पूरा हुआ",
      yes: "हां",
      no: "नहीं",
      good: "अच्छा",
      bad: "बुरा"
    }
  };

  const t = content[selectedLanguage] || content.en;

  // Landing Page Component - Simplified for less educated users
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Header - Larger and more visual */}
        <div className="text-center py-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Home className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl mb-3 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            {t.appName}
          </h1>
          <p className="text-xl text-gray-700 mb-8">{t.tagline}</p>
          
          {/* Voice Help Button - Prominent placement */}
          <Button 
            onClick={() => {
              toast.success("आवाज़ सहायक चालू है / Voice assistant activated");
            }}
            className="mb-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full shadow-lg"
          >
            <Volume2 className="w-6 h-6 mr-3" />
            {t.helpMe}
          </Button>
        </div>

        {/* Language Selection - More Visual */}
        <div className="mb-8">
          <h3 className="text-center mb-4 text-lg">भाषा चुनें / Choose Language</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant={selectedLanguage === 'hi' ? 'default' : 'outline'}
              onClick={() => setSelectedLanguage('hi')}
              className="h-16 text-lg"
            >
              <Globe className="w-6 h-6 mr-2" />
              हिंदी
            </Button>
            <Button
              variant={selectedLanguage === 'en' ? 'default' : 'outline'}
              onClick={() => setSelectedLanguage('en')}
              className="h-16 text-lg"
            >
              <Globe className="w-6 h-6 mr-2" />
              English
            </Button>
          </div>
        </div>

        {/* Features - Bigger cards with simpler text */}
        <div className="space-y-6 mb-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Camera className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2">काम की जानकारी / Work Updates</h3>
                <p className="text-gray-600">{t.projectTrackingDesc}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <ClipboardList className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-lg mb-2">गांव का सर्वे / Village Survey</h3>
                <p className="text-gray-600">{t.surveyDesc}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <MessageSquare className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-lg mb-2">समस्या बताएं / Report Problem</h3>
                <p className="text-gray-600">{t.grievanceDesc}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Megaphone className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg mb-2">महत्वपूर्ण समाचार / Important News</h3>
                <p className="text-gray-600">{t.announcementDesc}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Type Selection - Larger buttons with clearer icons */}
        <div className="space-y-4">
          <Button 
            onClick={() => {
              setUserType('citizen'); 
              setCurrentView('dashboard');
              toast.success("स्वागत है! / Welcome!");
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 h-16 text-lg rounded-xl shadow-lg"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <User className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div>{t.citizen}</div>
                <div className="text-sm opacity-90">गांव का व्यक्ति</div>
              </div>
            </div>
          </Button>
          
          <Button 
            onClick={() => {
              setUserType('authority'); 
              setCurrentView('dashboard');
              toast.success("अधिकारी स्वागत है! / Officer Welcome!");
            }}
            variant="outline"
            className="w-full h-16 text-lg rounded-xl border-2 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div>{t.authority}</div>
                <div className="text-sm text-gray-600">सरकारी अधिकारी</div>
              </div>
            </div>
          </Button>
        </div>

        {/* Offline Indicator - More visual */}
        {!isOnline && (
          <div className="mt-6 p-4 bg-yellow-100 rounded-xl border-2 border-yellow-300">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-yellow-800">इंटरनेट नहीं है</div>
                <div className="text-sm text-yellow-700">Internet connection needed</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Dashboard Component - Enhanced for accessibility
  const Dashboard = () => (
    <div className="pb-24">
      {/* Header - More prominent voice features */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl">{t.appName}</h1>
            <p className="text-blue-100 text-lg">नमस्ते! / Welcome!</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                toast.success("बोलिए, मैं सुन रहा हूँ / Speak, I'm listening");
              }}
              className="text-white hover:bg-white/20 p-3 rounded-full"
            >
              <Mic className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setCurrentView('landing')}
              className="text-white hover:bg-white/20 p-3 rounded-full"
            >
              <Settings className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Quick Stats - Larger and more visual */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-4 text-center text-white">
              <div className="text-3xl mb-2">{projects.length}</div>
              <div className="text-sm">चल रहे काम / Active Work</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-4 text-center text-white">
              <div className="text-3xl mb-2">{grievances.length}</div>
              <div className="text-sm">समस्याएं / Problems</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Big Action Buttons - Primary actions more prominent */}
        <section>
          <h2 className="mb-4 text-xl">मुख्य काम / Main Actions</h2>
          <div className="space-y-4">
            <Button 
              className="w-full h-20 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg text-lg"
              onClick={() => setCurrentView('projects')}
            >
              <div className="flex items-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Camera className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div>काम की फोटो लें</div>
                  <div className="text-sm opacity-90">Take Work Photo</div>
                </div>
              </div>
            </Button>

            <Button 
              variant="outline"
              className="w-full h-20 border-2 border-orange-300 hover:bg-orange-50 rounded-xl text-lg"
              onClick={() => setCurrentView('grievances')}
            >
              <div className="flex items-center text-orange-700">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div>समस्या बताएं</div>
                  <div className="text-sm opacity-80">Report Problem</div>
                </div>
              </div>
            </Button>

            <Button 
              variant="outline"
              className="w-full h-20 border-2 border-purple-300 hover:bg-purple-50 rounded-xl text-lg"
              onClick={() => setCurrentView('announcements')}
            >
              <div className="flex items-center text-purple-700">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Volume2 className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div>समाचार सुनें</div>
                  <div className="text-sm opacity-80">Listen to News</div>
                </div>
              </div>
            </Button>
          </div>
        </section>

        {/* Recent Updates - Simplified */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">नया अपडेट / Recent Updates</h2>
            <Button variant="ghost" size="sm">
              <Volume2 className="w-4 h-4 mr-2" />
              सुनें / Listen
            </Button>
          </div>
          <div className="space-y-4">
            {projects.slice(0, 2).map(project => (
              <Card key={project.id} className="shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="flex-1 text-lg">{project.name}</h3>
                    <Badge 
                      variant={project.status === 'In Progress' ? 'default' : 'secondary'}
                      className="text-sm px-3 py-1"
                    >
                      {project.status === 'In Progress' ? 'चल रहा' : 'शुरू'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{project.location}</span>
                  </div>

                  <div className="mb-3">
                    <Progress value={project.progress} className="h-3" />
                  </div>
                  <div className="text-lg text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {project.progress}% पूरा / Complete
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Announcements - More accessible */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">महत्वपूर्ण समाचार / Important News</h2>
            <Button variant="ghost" size="sm">
              <Volume2 className="w-4 h-4 mr-2" />
              सभी सुनें
            </Button>
          </div>
          {announcements.slice(0, 2).map(announcement => (
            <Card key={announcement.id} className="mb-4 shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start space-x-4">
                  <div className={`w-6 h-6 rounded-full mt-1 flex-shrink-0 ${
                    announcement.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg">{announcement.title}</h3>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          toast.success("समाचार पढ़ा जा रहा है / Reading news");
                        }}
                      >
                        <Volume2 className="w-5 h-5 text-blue-600" />
                      </Button>
                    </div>
                    <p className="text-gray-700 mb-3 text-lg leading-relaxed">{announcement.content}</p>
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className={`${
                        announcement.priority === 'high' ? 'border-red-300 text-red-700' : 'border-yellow-300 text-yellow-700'
                      }`}>
                        {announcement.priority === 'high' ? 'जरूरी / Urgent' : 'सामान्य / Normal'}
                      </Badge>
                      <span className="text-gray-500">{announcement.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );

  // Projects Component - Simplified with visual progress
  const Projects = () => (
    <div className="pb-24">
      <div className="bg-blue-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">काम की जानकारी</h1>
            <p className="text-blue-100 text-lg">Work Updates</p>
          </div>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              toast.success("फोटो लेने के लिए तैयार / Ready to take photo");
            }}
            className="text-white hover:bg-white/20 p-3 rounded-full"
          >
            <Camera className="w-8 h-8" />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Photo Action */}
        <Card className="bg-blue-50 border-blue-200 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl mb-2">काम की फोटो लें</h3>
            <p className="text-gray-600 mb-4">गांव में चल रहे काम की तस्वीर खींचें</p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg rounded-full"
              onClick={() => {
                toast.success("कैमरा खुल रहा है / Opening camera");
              }}
            >
              <Camera className="w-6 h-6 mr-3" />
              फोटो लें / Take Photo
            </Button>
          </CardContent>
        </Card>

        {/* Project List */}
        <div>
          <h2 className="text-xl mb-4">चल रहे काम / Ongoing Work</h2>
          {projects.map(project => (
            <Card key={project.id} className="mb-4 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="flex-1 text-lg pr-4">{project.name}</h3>
                  <Badge 
                    variant={project.status === 'In Progress' ? 'default' : 'secondary'}
                    className="text-sm px-3 py-1"
                  >
                    {project.status === 'In Progress' ? 'चल रहा है' : 'शुरू हुआ'}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{project.location}</span>
                </div>

                {/* Visual progress bar with emojis */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">काम कितना हुआ / Progress</span>
                    <span className="text-lg">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-4" />
                  <div className="flex justify-between text-2xl mt-2">
                    <span>🚧</span>
                    <span className={project.progress >= 50 ? '' : 'opacity-30'}>⚙️</span>
                    <span className={project.progress >= 100 ? '' : 'opacity-30'}>✅</span>
                  </div>
                </div>

                {/* Photo count and action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Camera className="w-5 h-5" />
                    <span className="text-lg">{project.images} फोटो / photos</span>
                  </div>
                  <Button 
                    size="lg"
                    onClick={() => {
                      toast.success("फोटो अपडेट की गई! / Photo updated!");
                    }}
                    className="px-6 py-2"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    फोटो जोड़ें
                  </Button>
                </div>

                {/* Progress status with emoji */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">
                      {project.progress < 25 ? '🚧' :
                       project.progress < 75 ? '⚙️' : 
                       project.progress < 100 ? '🔨' : '✅'}
                    </span>
                    <div>
                      <div className="text-lg">
                        {project.progress < 25 ? 'काम शुरू हुआ है' :
                         project.progress < 75 ? 'काम तेजी से चल रहा है' : 
                         project.progress < 100 ? 'काम लगभग पूरा है' : 'काम पूरा हो गया है'}
                      </div>
                      <div className="text-gray-600">{project.lastUpdate}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add New Project (Authority only) */}
        {userType === 'authority' && (
          <Card className="border-2 border-dashed border-gray-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">➕</div>
              <h3 className="text-xl mb-2">नया काम जोड़ें</h3>
              <p className="text-gray-600 mb-4">गांव में नए काम की जानकारी डालें</p>
              <Button className="px-8 py-3 text-lg">
                <span>नया प्रोजेक्ट बनाएं</span>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Help section */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">❓</div>
            <h3 className="text-lg mb-2">फोटो कैसे लें? / How to take photos?</h3>
            <p className="text-gray-600 mb-4">काम की फोटो लेने में मदद चाहिए?</p>
            <Button 
              variant="outline" 
              className="border-green-300 text-green-700 hover:bg-green-100"
              onClick={() => {
                toast.success("सहायता आ रही है / Help is coming");
              }}
            >
              <Volume2 className="w-4 h-4 mr-2" />
              मदद सुनें / Listen Help
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Surveys Component - Simplified with visual choices
  const Surveys = () => {
    const [currentSurvey, setCurrentSurvey] = useState(null);

    // Visual survey options with emojis
    const surveyQuestions = {
      healthcare: {
        title: "स्वास्थ्य सुविधा / Healthcare",
        icon: "🏥",
        questions: [
          {
            question: "आपके गांव में अस्पताल है? / Is there a hospital in your village?",
            options: [
              { text: "हां, अच्छा अस्पताल है / Yes, good hospital", emoji: "✅", value: "good" },
              { text: "हां, लेकिन सुविधा कम है / Yes, but limited facilities", emoji: "⚠️", value: "limited" },
              { text: "नहीं है / No hospital", emoji: "❌", value: "none" }
            ]
          }
        ]
      },
      education: {
        title: "शिक्षा / Education", 
        icon: "🏫",
        questions: [
          {
            question: "आपके गांव में स्कूल कैसा है? / How is the school in your village?",
            options: [
              { text: "बहुत अच्छा / Very good", emoji: "😊", value: "excellent" },
              { text: "ठीक है / Okay", emoji: "😐", value: "average" },
              { text: "सुधार की जरूरत / Needs improvement", emoji: "😟", value: "poor" },
              { text: "कोई स्कूल नहीं / No school", emoji: "❌", value: "none" }
            ]
          }
        ]
      },
      water: {
        title: "पानी / Water",
        icon: "💧",
        questions: [
          {
            question: "पानी की व्यवस्था कैसी है? / How is the water supply?",
            options: [
              { text: "24 घंटे साफ़ पानी / 24hrs clean water", emoji: "💙", value: "excellent" },
              { text: "कभी-कभी पानी आता है / Sometimes water comes", emoji: "🟡", value: "intermittent" },
              { text: "पानी गंदा आता है / Water is dirty", emoji: "🟤", value: "dirty" },
              { text: "पानी नहीं आता / No water supply", emoji: "❌", value: "none" }
            ]
          }
        ]
      }
    };

    const SurveyList = () => (
      <div className="space-y-4">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-xl mb-2">गांव का सर्वे करें</h2>
          <p className="text-gray-600">अपने गांव की सुविधाओं के बारे में बताएं</p>
        </div>

        {Object.entries(surveyQuestions).map(([key, survey]) => (
          <Card key={key} className="shadow-md">
            <CardContent className="p-6">
              <Button
                variant="outline"
                className="w-full h-20 border-2 hover:bg-gray-50"
                onClick={() => setCurrentSurvey(key)}
              >
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{survey.icon}</div>
                  <div className="text-left">
                    <div className="text-xl">{survey.title}</div>
                    <div className="text-sm text-gray-600">इस बारे में बताएं</div>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );

    const SurveyForm = ({ surveyKey }) => {
      const survey = surveyQuestions[surveyKey];
      const [answers, setAnswers] = useState({});

      const submitSurvey = () => {
        toast.success("सर्वे पूरा हुआ! धन्यवाद / Survey completed! Thank you");
        setCurrentSurvey(null);
        setAnswers({});
      };

      return (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-6xl mb-4">{survey.icon}</div>
            <h2 className="text-xl mb-2">{survey.title}</h2>
            <Button
              variant="ghost"
              onClick={() => setCurrentSurvey(null)}
              className="text-blue-600"
            >
              ← वापस जाएं / Go back
            </Button>
          </div>

          {survey.questions.map((question, qIndex) => (
            <Card key={qIndex} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg mb-6 text-center">{question.question}</h3>
                
                <div className="space-y-3">
                  {question.options.map((option, oIndex) => (
                    <Button
                      key={oIndex}
                      variant={answers[qIndex] === option.value ? "default" : "outline"}
                      className="w-full h-16 border-2 justify-start text-left"
                      onClick={() => {
                        setAnswers({ ...answers, [qIndex]: option.value });
                        toast.success("जवाब चुना गया / Answer selected");
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-4">{option.emoji}</span>
                        <span className="text-lg">{option.text}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            onClick={submitSurvey}
            disabled={Object.keys(answers).length < survey.questions.length}
            className="w-full h-16 bg-green-600 hover:bg-green-700 text-lg rounded-xl"
          >
            <CheckCircle className="w-6 h-6 mr-3" />
            सर्वे पूरा करें / Complete Survey
          </Button>
        </div>
      );
    };

    return (
      <div className="pb-24">
        <div className="bg-green-600 text-white p-6">
          <h1 className="text-2xl">गांव का सर्वे</h1>
          <p className="text-green-100 text-lg">Village Survey</p>
        </div>

        <div className="p-6">
          {currentSurvey ? (
            <SurveyForm surveyKey={currentSurvey} />
          ) : (
            <SurveyList />
          )}
        </div>
      </div>
    );
  };

  // Grievances Component - Simplified with voice options
  const Grievances = () => {
    const [newGrievance, setNewGrievance] = useState({ title: '', description: '', location: '' });
    const [useVoice, setUseVoice] = useState(false);

    const submitGrievance = () => {
      if (newGrievance.title && newGrievance.description) {
        const grievance = {
          id: grievances.length + 1,
          ...newGrievance,
          status: 'pending',
          date: new Date().toISOString().split('T')[0]
        };
        setGrievances([...grievances, grievance]);
        setNewGrievance({ title: '', description: '', location: '' });
        toast.success("आपकी समस्या भेज दी गई है! / Your problem has been sent!");
      } else {
        toast.error("कृपया सभी जानकारी भरें / Please fill all information");
      }
    };

    // Common problem templates
    const commonProblems = [
      { title: "बिजली नहीं आती / No Electricity", icon: "⚡" },
      { title: "पानी नहीं आता / No Water", icon: "💧" },
      { title: "सड़क खराब है / Road Damaged", icon: "🛣️" },
      { title: "गंदगी की समस्या / Garbage Problem", icon: "🗑️" },
      { title: "स्ट्रीट लाइट नहीं जलती / Street Light Not Working", icon: "💡" }
    ];

    return (
      <div className="pb-24">
        <div className="bg-orange-600 text-white p-6">
          <h1 className="text-2xl">समस्या बताएं</h1>
          <p className="text-orange-100 text-lg">Report Your Problem</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Voice Input Option */}
          <Card className="border-2 border-orange-200 bg-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2">आवाज़ में बताएं / Tell by Voice</h3>
              <p className="text-gray-600 mb-4">बोलकर अपनी समस्या बताएं</p>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full"
                onClick={() => {
                  setUseVoice(!useVoice);
                  toast.success("बोलना शुरू करें / Start speaking");
                }}
              >
                {useVoice ? 'रुकें / Stop' : 'बोलें / Speak'}
              </Button>
            </CardContent>
          </Card>

          {/* Common Problems - Visual selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">आम समस्याएं / Common Problems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {commonProblems.map((problem, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-16 justify-start text-left border-2 hover:bg-gray-50"
                    onClick={() => {
                      setNewGrievance({
                        ...newGrievance,
                        title: problem.title
                      });
                      toast.success("समस्या चुनी गई / Problem selected");
                    }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{problem.icon}</span>
                      <span className="text-lg">{problem.title}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Manual Input Form - Simplified */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">या लिखकर बताएं / Or Write Your Problem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block mb-3 text-lg">समस्या का नाम / Problem Name</label>
                <Input 
                  value={newGrievance.title}
                  onChange={(e) => setNewGrievance({...newGrievance, title: e.target.value})}
                  placeholder="जैसे: बिजली नहीं आती / Like: No electricity"
                  className="h-12 text-lg"
                />
              </div>

              <div>
                <label className="block mb-3 text-lg">कहाँ है समस्या? / Where is the problem?</label>
                <Input 
                  value={newGrievance.location}
                  onChange={(e) => setNewGrievance({...newGrievance, location: e.target.value})}
                  placeholder="जैसे: मेरे घर के पास / Like: Near my house"
                  className="h-12 text-lg"
                />
              </div>

              <div>
                <label className="block mb-3 text-lg">पूरी जानकारी / Full Details</label>
                <Textarea 
                  value={newGrievance.description}
                  onChange={(e) => setNewGrievance({...newGrievance, description: e.target.value})}
                  placeholder="समस्या के बारे में पूरी जानकारी लिखें / Write complete information about the problem"
                  rows={4}
                  className="text-lg"
                />
              </div>

              <Button 
                onClick={submitGrievance} 
                className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-lg rounded-xl"
                disabled={!newGrievance.title || !newGrievance.description}
              >
                <Send className="w-6 h-6 mr-3" />
                समस्या भेजें / Send Problem
              </Button>
            </CardContent>
          </Card>

          {/* Existing Grievances - More visual */}
          <div>
            <h2 className="mb-4 text-xl">आपकी समस्याएं / Your Problems</h2>
            {grievances.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">😊</div>
                  <p className="text-lg text-gray-600">अभी तक कोई समस्या नहीं है</p>
                  <p className="text-gray-500">No problems reported yet</p>
                </CardContent>
              </Card>
            ) : (
              grievances.map(grievance => (
                <Card key={grievance.id} className="mb-4 shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="flex-1 text-lg">{grievance.title}</h3>
                      <Badge 
                        variant={
                          grievance.status === 'resolved' ? 'secondary' : 
                          grievance.status === 'in-progress' ? 'default' : 'outline'
                        }
                        className="text-sm px-3 py-1"
                      >
                        {grievance.status === 'resolved' ? 'हल हो गया' :
                         grievance.status === 'in-progress' ? 'काम चल रहा' : 'प्रतीक्षा में'}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-3 text-lg leading-relaxed">{grievance.description}</p>
                    
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">{grievance.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{grievance.date}</span>
                      </div>
                    </div>

                    {/* Status indicator with emoji */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">
                          {grievance.status === 'resolved' ? '✅' :
                           grievance.status === 'in-progress' ? '⏳' : '📋'}
                        </span>
                        <span className="text-lg">
                          {grievance.status === 'resolved' ? 'आपकी समस्या हल हो गई है' :
                           grievance.status === 'in-progress' ? 'आपकी समस्या पर काम चल रहा है' : 'आपकी समस्या मिल गई है'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  // Announcements Component - Enhanced for accessibility
  const Announcements = () => (
    <div className="pb-24">
      <div className="bg-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">महत्वपूर्ण समाचार</h1>
            <p className="text-purple-100 text-lg">Important News</p>
          </div>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              toast.success("सभी समाचार सुनाए जा रहे हैं / Reading all news");
            }}
            className="text-white hover:bg-white/20 p-3 rounded-full"
          >
            <Volume2 className="w-8 h-8" />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {announcements.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">📢</div>
              <p className="text-lg text-gray-600">अभी कोई समाचार नहीं है</p>
              <p className="text-gray-500">No announcements right now</p>
            </CardContent>
          </Card>
        ) : (
          announcements.map(announcement => (
            <Card key={announcement.id} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Priority indicator with larger visual cue */}
                  <div className={`w-8 h-8 rounded-full mt-2 flex items-center justify-center flex-shrink-0 ${
                    announcement.priority === 'high' ? 'bg-red-500' : 
                    announcement.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}>
                    <span className="text-white text-lg">
                      {announcement.priority === 'high' ? '!' : 
                       announcement.priority === 'medium' ? '⚠' : 'ℹ'}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl leading-relaxed pr-4">{announcement.title}</h3>
                      <Button 
                        variant="ghost" 
                        size="lg"
                        onClick={() => {
                          toast.success("समाचार पढ़ा जा रहा है / Reading news");
                        }}
                        className="p-3 rounded-full hover:bg-purple-100"
                      >
                        <Volume2 className="w-6 h-6 text-purple-600" />
                      </Button>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">{announcement.content}</p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <Badge 
                        variant="outline" 
                        className={`text-sm px-3 py-1 ${
                          announcement.priority === 'high' ? 'border-red-300 text-red-700 bg-red-50' : 
                          announcement.priority === 'medium' ? 'border-yellow-300 text-yellow-700 bg-yellow-50' : 
                          'border-blue-300 text-blue-700 bg-blue-50'
                        }`}
                      >
                        {announcement.priority === 'high' ? 'बहुत जरूरी / Very Important' :
                         announcement.priority === 'medium' ? 'जरूरी / Important' : 'सामान्य / Normal'}
                      </Badge>
                      
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{announcement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons for important announcements */}
                {announcement.priority === 'high' && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">🚨</span>
                      <span className="text-red-800">तुरंत कार्य की जरूरत / Immediate Action Required</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        समझ गया / Understood
                      </Button>
                      <Button variant="outline" size="sm">
                        और जानकारी / More Info
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}

        {/* Help section */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-lg mb-2">मदद चाहिए? / Need Help?</h3>
            <p className="text-gray-600 mb-4">समाचार समझने में कोई परेशानी हो तो पूछें</p>
            <Button 
              variant="outline" 
              className="border-blue-300 text-blue-700 hover:bg-blue-100"
              onClick={() => {
                toast.success("मदद आ रही है / Help is coming");
              }}
            >
              <Mic className="w-4 h-4 mr-2" />
              सवाल पूछें / Ask Question
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Authority Dashboard (Enhanced for authorities)
  const AuthorityDashboard = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <h1>Authority Dashboard</h1>
        <p className="text-blue-100">Monitor village development progress</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1 text-blue-600">{projects.length}</div>
              <div className="text-sm text-gray-600">Active Projects</div>
              <div className="flex items-center justify-center mt-2 text-xs text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2 this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-1 text-orange-600">{grievances.length}</div>
              <div className="text-sm text-gray-600">Pending Grievances</div>
              <div className="flex items-center justify-center mt-2 text-xs text-red-600">
                <Clock className="w-3 h-3 mr-1" />
                Needs attention
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Status Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Project Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {projects.map(project => (
              <div key={project.id} className="mb-4 last:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{project.name}</span>
                  <span className="text-sm text-gray-600">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Grievances */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Grievances</CardTitle>
          </CardHeader>
          <CardContent>
            {grievances.map(grievance => (
              <div key={grievance.id} className="flex items-center justify-between p-3 border-b last:border-b-0">
                <div>
                  <div className="text-sm mb-1">{grievance.title}</div>
                  <div className="text-xs text-gray-600">{grievance.location}</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs">
                    {grievance.status}
                  </Badge>
                  <div className="text-xs text-gray-500 mt-1">{grievance.date}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions for Authorities */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-16 flex-col">
            <Megaphone className="w-5 h-5 mb-1" />
            <span className="text-xs">Send Broadcast</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col">
            <ClipboardList className="w-5 h-5 mb-1" />
            <span className="text-xs">Create Survey</span>
          </Button>
        </div>
      </div>
    </div>
  );

  // Bottom Navigation - Larger and more accessible
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-2 py-3 shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <button
          onClick={() => {
            setCurrentView('dashboard');
            toast.success("होम पेज / Home page");
          }}
          className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors ${
            currentView === 'dashboard' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">होम</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('projects');
            toast.success("काम की फोटो / Work photos");
          }}
          className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors ${
            currentView === 'projects' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Camera className="w-6 h-6" />
          <span className="text-xs">फोटो</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('surveys');
            toast.success("सर्वे / Survey");
          }}
          className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors ${
            currentView === 'surveys' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ClipboardList className="w-6 h-6" />
          <span className="text-xs">सर्वे</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('grievances');
            toast.success("समस्या / Problem");
          }}
          className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors ${
            currentView === 'grievances' 
              ? 'text-orange-600 bg-orange-50' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs">समस्या</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('announcements');
            toast.success("समाचार / News");
          }}
          className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors ${
            currentView === 'announcements' 
              ? 'text-purple-600 bg-purple-50' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Megaphone className="w-6 h-6" />
          <span className="text-xs">समाचार</span>
        </button>
      </div>
    </div>
  );

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return userType === 'authority' ? <AuthorityDashboard /> : <Dashboard />;
      case 'projects':
        return <Projects />;
      case 'surveys':
        return <Surveys />;
      case 'grievances':
        return <Grievances />;
      case 'announcements':
        return <Announcements />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentView()}
      {currentView !== 'landing' && <BottomNav />}
    </div>
  );
}