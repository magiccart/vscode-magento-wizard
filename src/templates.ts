const templates: { [key: string]: string } = {
    '\/etc\/module\.xml$': require('../templates/etc/module.xml'),
    'di\.xml$': require('../templates/etc/di.xml'),
    'acl\.xml$': require('../templates/etc/acl.xml'),
    '\/etc\/crontab\.xml$': require('../templates/etc/crontab.xml'),
    '\/etc\/cron_groups\.xml$': require('../templates/etc/cron_groups.xml'),
    'routes\.xml$': require('../templates/etc/routes.xml'),
    '\/etc\/((frontend|adminhtml)\/)?events\.xml$': require('../templates/etc/events.xml'),
    '\/etc\/((frontend|adminhtml)\/)?config\.xml$': require('../templates/etc/config.xml'),
    '\/etc\/(adminhtml\/)?system\.xml$': require('../templates/etc/system.xml'),
    '\/view\/(frontend|adminhtml)\/layout\/.*\.xml$': require('../templates/layout.xml'),

    '\/Block\/.*\.php$': require('../templates/block.php'),
    '\/Controller\/.*\.php$': require('../templates/controller.php'),
    '\/Model\/.*\.php$': require('../templates/model.php'),
    '\/Observer\/.*\.php$': require('../templates/observer.php'),
    '\/Setup\/InstallData.php$': require('../templates/Setup/InstallData.php'),
    '\/Setup\/InstallSchema.php$': require('../templates/Setup/InstallSchema.php'),
    '\/Setup\/Recurring.php$': require('../templates/Setup/Recurring.php'),
    '\/Setup\/UpgradeData.php$': require('../templates/Setup/UpgradeData.php'),
    '\/Setup\/UpgradeSchema.php$': require('../templates/Setup/UpgradeSchema.php'),
};

export default templates;