import { Navigate, Route } from 'react-router-dom'
import AdminLayout from '../../features/admin/component/AdminLayout'
import Dashboard from '../../features/admin/pages/Dashboard'
import StudentsPage from '../../features/admin/pages/Studentspage'
import OperatorsPage from '../../features/admin/pages/Operator'
import OperatorView from '../../features/admin/pages/OperatorView'
import {
  MyProfilePage,
  PrivacyPolicyPage,
  ShareFeedbackPage,
} from '../../features/admin/pages/ProfileMenuPages'
import {
  BatchesPage,
  CoursesPage,
  EnquiryPage,
  NotificationsPage,
  SettingsPage,
  WebsitePage,
} from '../../features/admin/pages/PlaceholderPages'
 
export const adminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="students" element={<StudentsPage />} />
    <Route path="operators" element={<OperatorsPage />} />
    <Route path="operators/view" element={<OperatorView />} />
    <Route path="courses" element={<CoursesPage />} />
    <Route path="courses/add" element={<CoursesPage />} />
    <Route path="courses/categories" element={<CoursesPage />} />
    <Route path="batches" element={<BatchesPage />} />
    <Route path="enquiry" element={<EnquiryPage />} />
    <Route path="notifications" element={<NotificationsPage />} />
    <Route path="website/*" element={<WebsitePage />} />
    <Route path="my-profile" element={<MyProfilePage />} />
    <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
    <Route path="share-feedback" element={<ShareFeedbackPage />} />
    <Route path="settings" element={<SettingsPage />} />
  </Route>
)
