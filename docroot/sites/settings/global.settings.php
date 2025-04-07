<?php

/**
 * Global Settings.
 */

if (isset($_ENV['AH_SITE_ENVIRONMENT'])) {
  switch ($_ENV['AH_SITE_ENVIRONMENT']) {
    case 'prod':
      // Disable Shield on prod by setting the
      // shield user variable to NULL
      $config['shield.settings']['shield_enable'] = FALSE;
      break;
    default:
      $config['shield.settings']['shield_enable'] = TRUE;
      break;
  }
}
