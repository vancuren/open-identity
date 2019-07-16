
  Pod::Spec.new do |s|
    s.name = 'OpenIdentity'
    s.version = '0.0.1'
    s.summary = 'A open source authentication plugin for Ionic Android and iOS'
    s.license = 'MIT'
    s.homepage = 'https://github.com/vancuren/open-identity.git'
    s.author = 'Russell L. Van Curen'
    s.source = { :git => 'https://github.com/vancuren/open-identity.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end