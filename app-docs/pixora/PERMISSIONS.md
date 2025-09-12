# Permissions - Pixora AI Image Editor

**Last Updated: December 2024**

## Required Permissions

Pixora requires certain permissions to provide its core functionality. This document explains why each permission is needed and how we use it.

## 1. Photo Library Access

### Permission Requested

- **iOS**: `NSPhotoLibraryUsageDescription`
- **Android**: `READ_EXTERNAL_STORAGE`

### Why We Need It

- Allow you to select images from your photo library
- Enable image processing and editing features
- Provide seamless image import functionality

### How We Use It

- Access images only when you explicitly select them
- Process images locally on your device
- Do not access your entire photo library
- Images are not uploaded to our servers permanently

### What We Don't Do

- We don't scan your entire photo library
- We don't upload your photos to our servers
- We don't share your photos with third parties
- We don't access photos you haven't selected

## 2. Camera Access

### Permission Requested

- **iOS**: `NSCameraUsageDescription`
- **Android**: `CAMERA`

### Why We Need It

- Allow you to take photos directly within the app
- Enable real-time image capture for processing
- Provide integrated camera functionality

### How We Use It

- Access camera only when you choose to take a photo
- Process captured images locally
- Do not record or store video
- Images are processed immediately after capture

### What We Don't Do

- We don't record video or audio
- We don't access camera when not in use
- We don't store camera data permanently
- We don't share camera data with third parties

## 3. Notifications

### Permission Requested

- **iOS**: Push Notifications
- **Android**: Post Notifications

### Why We Need It

- Notify you when image processing is complete
- Alert you about important app updates
- Provide status updates for background operations

### How We Use It

- Send notifications only for completed operations
- Provide important app updates and announcements
- Enable background processing notifications
- Allow you to control notification preferences

### What We Don't Do

- We don't send promotional or marketing notifications
- We don't spam you with unnecessary alerts
- We don't share notification data with third parties
- We don't send notifications without your permission

## 4. Storage Access

### Permission Requested

- **Android**: `WRITE_EXTERNAL_STORAGE`

### Why We Need It

- Save processed images to your device
- Store app data and settings
- Enable offline functionality

### How We Use It

- Save images only when you choose to save them
- Store app data in designated app folders
- Maintain local chat history and settings
- Enable data backup and restoration

### What We Don't Do

- We don't access files outside our app directory
- We don't modify other apps' data
- We don't share storage data with third parties
- We don't access personal files without permission

## 5. Network Access

### Permission Requested

- **iOS**: Internet Access
- **Android**: `INTERNET`

### Why We Need It

- Connect to AI processing services
- Download app updates
- Sync data and analytics
- Provide real-time functionality

### How We Use It

- Connect to AI services for image processing
- Download necessary app components
- Sync usage analytics (anonymized)
- Provide cloud-based features

### What We Don't Do

- We don't track your browsing activity
- We don't access other apps' network data
- We don't share network data with third parties
- We don't use network access for unauthorized purposes

## 6. Device Information

### Data Collected

- Device model and operating system
- App version and usage statistics
- Crash reports and error logs
- Anonymous usage analytics

### Why We Need It

- Improve app performance and stability
- Fix bugs and technical issues
- Provide better user experience
- Ensure compatibility across devices

### How We Use It

- Analyze app performance and usage patterns
- Identify and fix technical issues
- Improve app features and functionality
- Provide customer support

### What We Don't Do

- We don't collect personal identifying information
- We don't track your location or personal data
- We don't share device data with third parties
- We don't use data for advertising purposes

## 7. Location Access (Optional)

### Permission Requested

- **iOS**: Location Services
- **Android**: `ACCESS_FINE_LOCATION`

### Why We Need It

- Determine your region for pricing and features
- Provide localized content and services
- Comply with regional regulations

### How We Use It

- Access location only when necessary
- Use region information for app configuration
- Provide region-specific features and pricing
- Comply with local laws and regulations

### What We Don't Do

- We don't track your exact location
- We don't store location data permanently
- We don't share location data with third parties
- We don't use location for advertising

## 8. Permission Management

### How to Control Permissions

- **iOS**: Settings > Privacy & Security > [Permission Type]
- **Android**: Settings > Apps > Pixora > Permissions
- **In-App**: Settings > Permissions

### What Happens If You Deny Permissions

- Some features may not work properly
- You may not be able to select images from your library
- Camera functionality may be limited
- Notifications may not work

### How to Grant Permissions Later

- You can grant permissions at any time
- Go to your device settings
- Find Pixora in the app list
- Enable the permissions you want

## 9. Data Security

### How We Protect Your Data

- All data transmission is encrypted
- Local storage is protected by device security
- We use industry-standard security measures
- Regular security audits and updates

### Your Data Rights

- You can delete your data at any time
- You can control what data we collect
- You can request data deletion
- You can opt out of data collection

## 10. Third-Party Services

### Services We Use

- **Fall AI**: For image processing
- **Supabase**: For analytics and error logging
- **Apple/Google**: For app store services

### How We Protect Your Data

- We only share necessary data with service providers
- All data sharing is done securely
- We require service providers to protect your data
- We regularly audit our service providers

## 11. Contact Us

If you have questions about permissions or data usage:

- **Website**: https://mehmetsagir.dev
- **App**: Use the "Send Feedback" feature in settings

---

**Pixora AI Image Editor**  
_Transforming images with artificial intelligence_

**We are committed to protecting your privacy and being transparent about how we use your data.**
