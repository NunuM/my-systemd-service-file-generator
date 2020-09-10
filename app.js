angular.module('systemdgen', ['ngMaterial'])
    .controller('main', ['$scope', '$mdConstant', '$mdDialog', function ($scope, $mdConstant, $mdDialog) {

        $scope.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];

        $scope.unitVisibleItems = ['Description', 'After', 'Wants'];
        $scope.installVisibleItems = ['WantedBy'];
        $scope.serviceVisibleItems = ['Type', 'ExecStart', 'Restart', 'Environment'];

        $scope.unit = {
            Description: 'This unit will start after internet connection',
            Documentation: [],
            After: ['network.target'],
            Wants: ['network-online.target'],
            Requires: [],
            Requisite: [],
            BindsTo: [],
            PartOf: [],
            Conflicts: [],
            Before: [],
            OnFailure: [],
            PropagatesReloadTo: [],
            ReloadPropagatedFrom: [],
            JoinsNamespaceOf: [],
            RequiresMountsFor: [],
            OnFailureJobMode: 'replace',
            IgnoreOnIsolate: false,
            StopWhenUnneeded: false,
            RefuseManualStart: false,
            RefuseManualStop: false,
            AllowIsolate: false,
            DefaultDependencies: "yes",
            CollectMode: "inactive",
            FailureAction: 'none',
            SuccessAction: 'none',
            FailureActionExitStatus: '',
            SuccessActionExitStatus: '',
            JobTimeoutSec: 'infinity',
            JobRunningTimeoutSec: 'infinity',
            JobTimeoutAction: "",
            JobTimeoutRebootArgument: "",
            StartLimitIntervalSec: "",
            StartLimitBurst: "",
            StartLimitAction: "",
            RebootArgument: "",
            SourcePath: "",
            ConditionArchitecture: "",
            ConditionVirtualization: "",
            ConditionHost: "",
            ConditionKernelCommandLine: "",
            ConditionKernelVersion: "",
            ConditionEnvironment: "",
            ConditionSecurity: "",
            ConditionCapability: "",
            ConditionACPower: "",
            ConditionNeedsUpdate: "",
            ConditionFirstBoot: "",
            ConditionPathExists: "",
            ConditionPathExistsGlob: "",
            ConditionPathIsDirectory: "",
            ConditionPathIsSymbolicLink: "",
            ConditionPathIsMountPoint: "",
            ConditionPathIsReadWrite: "",
            ConditionPathIsEncrypted: "",
            ConditionDirectoryNotEmpty: "",
            ConditionFileNotEmpty: "",
            ConditionFileIsExecutable: "",
            ConditionUser: "",
            ConditionGroup: "",
            ConditionControlGroupController: "",
            ConditionMemory: "",
            ConditionCPUs: "",
            AssertArchitecture: "",
            AssertVirtualization: "",
            AssertHost: "",
            AssertKernelCommandLine: "",
            AssertKernelVersion: "",
            AssertSecurity: "",
            AssertCapability: "",
            AssertACPower: "",
            AssertNeedsUpdate: "",
            AssertFirstBoot: "",
            AssertPathExists: "",
            AssertPathExistsGlob: "",
            AssertPathIsDirectory: "",
            AssertPathIsSymbolicLink: "",
            AssertPathIsMountPoint: "",
            AssertPathIsReadWrite: "",
            AssertDirectoryNotEmpty: "",
            AssertFileNotEmpty: "",
            AssertFileIsExecutable: "",
            AssertUser: "",
            AssertGroup: "",
            AssertControlGroupController: "",
        };
        $scope.install = {
            WantedBy: ['multi-user.target'],
            Alias: "",
            RequiredBy: [],
            Also: [],
            DefaultInstance: "",
        };

        $scope.enums = {
            unit: {
                CollectMode: [
                    'inactive',
                    'inactive-or-failed',

                ],
                FailureAction: [
                    'none',
                    'reboot',
                    'reboot-force',
                    'reboot-immediate',
                    'poweroff',
                    'poweroff-force',
                    'poweroff-immediate',
                    'exit',
                    'exit-force'
                ],
                SuccessAction: [
                    'none',
                    'reboot',
                    'reboot-force',
                    'reboot-immediate',
                    'poweroff',
                    'poweroff-force',
                    'poweroff-immediate',
                    'exit',
                    'exit-force'
                ],
                OnFailureJobMode: [
                    'fail',
                    'replace',
                    'replace-irreversibly',
                    'isolate',
                    'flush',
                    'ignore-dependencies',
                    'ignore-requirements'
                ],
                DefaultDependencies: [
                    'yes',
                    'no'
                ]
            },
            service: {
                Type: [
                    'simple',
                    'exec',
                    'forking',
                    'oneshot',
                    'dbus',
                    'notify',
                    'idle'
                ],
                Restart: [
                    'no',
                    'on-success',
                    'on-failure',
                    'on-abnormal',
                    'on-watchdog',
                    'on-abort',
                    'always',
                ],
                NotifyAccess: [
                    'none',
                    'main',
                    'exec',
                    'all'
                ],
                OOMPolicy: [
                    'continue',
                    'stop',
                    'kill'
                ],
                CPUSchedulingPolicy: [
                    'other',
                    'batch',
                    'idle',
                    'fifo',
                    'rr'
                ],
                IOSchedulingClass: [
                    'none',
                    'realtime',
                    'best-effort',
                    'idle'
                ],
                ProtectSystem: [
                    'true',
                    'false',
                    'full',
                    'strict'
                ],
                ProtectHome: [
                    'true',
                    'false',
                    'read-only',
                    'tmpfs'
                ],
                LogLevelMax: [
                    'emerg',
                    'alert',
                    'crit',
                    'err',
                    'warning',
                    'notice',
                    'info',
                    'debug'
                ],
                SyslogLevel: [
                    'emerg',
                    'alert',
                    'crit',
                    'err',
                    'warning',
                    'notice',
                    'info',
                    'debug'
                ],
                SyslogFacility: [
                    'kern',
                    'user',
                    'mail',
                    'daemon',
                    'auth',
                    'syslog',
                    'lpr',
                    'news',
                    'uucp',
                    'cron',
                    'authpriv',
                    'ftp',
                    'local0',
                    'local1',
                    'local2',
                    'local3',
                    'local4',
                    'local5',
                    'local6',
                    'local7'
                ]
            },
        };

        $scope.showOptionsDialogue = function (ev, section, selectedSection) {

            $mdDialog.show({
                bindToController: true,
                locals: {
                    items: Object.keys($scope[section]),
                    selected: $scope[selectedSection]
                },
                controller: ['$scope', '$mdDialog', 'items', 'selected', function ($scope, $mdDialog, items, selected) {
                    $scope.items = items;
                    $scope.selected = selected;

                    $scope.close = function () {
                        $mdDialog.hide($scope.selected);
                    }
                }],
                template: `
        <md-dialog>
         <md-dialog-content>
           <div class="md-dialog-content">
            <md-input-container>
                <label>Options</label>
                <md-select ng-model="selected" multiple>
                    <md-optgroup label="Options">
                        <md-option ng-value="option" ng-repeat="option in items">
                            {{option}}
                        </md-option>
                    </md-optgroup>
                </md-select>
             
             </md-input-container>
             </div>
                
                <md-dialog-actions layout="row">
                  <span flex></span>
                  <md-button ng-click="close()">
                    Ok
                  </md-button>
                </md-dialog-actions>                
        </md-dialog>`,
                parent: angular.element(document.body),
                targetEvent: ev
            }).then((selected) => {
                $scope[selectedSection] = selected;
            }).catch(console.log);

        };

        $scope.service = {
            Restart: 'always',
            Type: 'simple',
            RemainAfterExit: 'no',
            GuessMainPID: 'yes',
            PIDFile: '',
            BusName: '',
            ExecStart: '',
            ExecStartPre: '',
            ExecStartPost: '',
            ExecCondition: '',
            ExecReload: '',
            ExecStop: '',
            ExecStopPost: '',
            RestartSec: '100ms',
            TimeoutStartSec: '',
            TimeoutStopSec: '',
            TimeoutAbortSec: '',
            TimeoutSec: '',
            TimeoutStartFailureMode: '',
            TimeoutStopFailureMode: '',
            RuntimeMaxSec: '',
            WatchdogSec: '',
            SuccessExitStatus: '',
            RestartPreventExitStatus: true,
            RestartForceExitStatus: '',
            RootDirectoryStartOnly: false,
            NonBlocking: '',
            NotifyAccess: 'none',
            Sockets: '',
            FileDescriptorStoreMax: '',
            USBFunctionDescriptors: '',
            USBFunctionStrings: '',
            OOMPolicy: '',
            WorkingDirectory: '',
            RootDirectory: '',
            RootImage: '',
            RootHash: '',
            RootHashSignature: '',
            RootVerity: '',
            MountAPIVFS: '',
            BindPaths: '',
            BindReadOnlyPaths: '',
            User: '',
            Group: '',
            DynamicUser: '',
            SupplementaryGroups: '',
            PAMName: '',
            CapabilityBoundingSet: '',
            AmbientCapabilities: '',
            NoNewPrivileges: '',
            SecureBits: '',
            SELinuxContext: '',
            AppArmorProfile: '',
            SmackProcessLabel: '',
            LimitCPU: '',
            LimitFSIZE: '',
            LimitDATA: '',
            LimitSTACK: '',
            LimitCORE: '',
            LimitRSS: '',
            LimitNOFILE: '',
            LimitAS: '',
            LimitNPROC: '',
            LimitMEMLOCK: '',
            LimitLOCKS: '',
            LimitSIGPENDING: '',
            LimitMSGQUEUE: '',
            LimitNICE: '',
            LimitRTPRIO: '',
            LimitRTTIME: '',
            UMask: '',
            CoredumpFilter: '',
            KeyringMode: '',
            OOMScoreAdjust: 0,
            TimerSlackNSec: '',
            Personality: '',
            IgnoreSIGPIPE: true,
            Nice: '',
            CPUSchedulingPolicy: '',
            CPUSchedulingPriority: '',
            CPUSchedulingResetOnFork: false,
            CPUAffinity: '',
            NUMAPolicy: '',
            NUMAMask: '',
            IOSchedulingClass: '',
            IOSchedulingPriority: '',
            ProtectSystem: '',
            ProtectHome: '',
            RuntimeDirectory: '',
            StateDirectory: '',
            CacheDirectory: '',
            LogsDirectory: '',
            ConfigurationDirectory: '',
            RuntimeDirectoryMode: '',
            StateDirectoryMode: '',
            CacheDirectoryMode: '',
            LogsDirectoryMode: '',
            ConfigurationDirectoryMode: '',
            RuntimeDirectoryPreserve: '',
            TimeoutCleanSec: '',
            ReadWritePaths: [],
            ReadOnlyPaths: [],
            InaccessiblePaths: [],
            TemporaryFileSystem: '',
            PrivateTmp: '',
            PrivateDevices: [],
            PrivateNetwork: false,
            NetworkNamespacePath: '',
            PrivateUsers: false,
            ProtectHostname: false,
            ProtectClock: false,
            ProtectKernelTunables: false,
            ProtectKernelModules: false,
            ProtectKernelLogs: false,
            ProtectControlGroups: false,
            RestrictAddressFamilies: [],
            RestrictNamespaces: [],
            LockPersonality: false,
            MemoryDenyWriteExecute: false,
            RestrictRealtime: false,
            RestrictSUIDSGID: false,
            RemoveIPC: false,
            PrivateMounts: false,
            MountFlags: '',
            SystemCallFilter: [],
            SystemCallErrorNumber: '',
            SystemCallArchitectures: [],
            Environment: ["'TEST=test'"],
            EnvironmentFile: '',
            PassEnvironment: '',
            UnsetEnvironment: '',
            StandardInput: '',
            StandardOutput: '',
            StandardError: '',
            StandardInputText: '',
            StandardInputData: '',
            LogLevelMax: '',
            LogExtraFields: '',
            LogRateLimitIntervalSec: '',
            LogRateLimitBurst: '',
            LogNamespace: '',
            SyslogIdentifier: '',
            SyslogFacility: '',
            SyslogLevel: '',
            SyslogLevelPrefix: '',
            TTYPath: '',
            TTYReset: '',
            TTYVHangup: '',
            TTYVTDisallocate: '',
            UtmpIdentifier: '',
            UtmpMode: '',
            KillMode: '',
            KillSignal: '',
            RestartKillSignal: '',
            SendSIGHUP: '',
            SendSIGKILL: '',
            FinalKillSignal: '',
            WatchdogSignal: '',
        };

        $scope.addMapVariable = function (section, term) {

            if ($scope.inputKey && $scope.inputVar) {
                $scope[section][term].push("'" + $scope.inputKey + "=" + $scope.inputVar + "'");
                $scope.inputKey = '';
                $scope.inputVar = '';
            }
        };

        $scope.download = function (ev) {

            const confirm = $mdDialog.prompt()
                .title('Service Name')
                .textContent('Insert service file name')
                .placeholder('Service name')
                .ariaLabel('Service')
                .initialValue('example')
                .targetEvent(ev)
                .required(true)
                .ok('Download')
                .cancel('Cancel');

            $mdDialog.show(confirm)
                .then(function (name) {

                    if (!name.endsWith(".service")) {
                        name += ".service";
                    }

                    createFile(name, document.getElementById("preview").innerText);

                }, function () {
                    //Ignore
                });
        };

        function createFile(filename, text) {
            const pom = document.createElement('a');
            pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            pom.setAttribute('download', filename);

            if (document.createEvent) {
                const event = document.createEvent('MouseEvents');
                event.initEvent('click', true, true);
                pom.dispatchEvent(event);
            } else {
                pom.click();
            }
        }

    }])
    .directive('dPreview', ['$compile', '$interpolate', function ($compile, $interpolate) {
        return {
            scope: false,
            replace: true,
            link: function (scope, iElement, iAttrs) {

                let elementToCompile = '<div id="preview" class="preview"><p class="section">[Unit]<p/>';

                Object.keys(scope.unit).forEach((term) => {
                    elementToCompile += `<p ng-show="unitVisibleItems.includes('${term}')">{{ unitVisibleItems.includes('${term}') ? '${term}=' + (unit.${term}.constructor.name === 'Array' ? unit.${term}.join(' ') : unit.${term} ) : '' }} </p>`;
                });

                elementToCompile += '<p class="section">[Service]</p>'

                Object.keys(scope.service).forEach((term) => {
                    elementToCompile += `<p ng-show="serviceVisibleItems.includes('${term}')">{{ serviceVisibleItems.includes('${term}') ? '${term}=' + (service.${term}.constructor.name === 'Array' ? service.${term}.join(' ') : service.${term} ) : '' }} </p>`;
                });

                elementToCompile += '<p class="section">[Install]</p>'

                Object.keys(scope.install).forEach((term) => {
                    elementToCompile += `<p ng-show="installVisibleItems.includes('${term}')"> {{ installVisibleItems.includes('${term}') ? '${term}=' + (install.${term}.constructor.name === 'Array' ? install.${term}.join(' ') : install.${term} ) : '' }} </p>`;
                });

                elementToCompile += '</div>'
                
                iElement.append($compile(angular.element(elementToCompile))(scope));
            }
        }
    }])
    .directive('dUnit', ['$compile', function ($compile) {
        return {
            scope: false,
            link: function (scope, iElement, iAttrs) {

                const section = iAttrs.sec;
                const visibleItems = iAttrs.vis;

                Object.keys(scope[section]).forEach((term) => {

                    let elementToCompile;

                    if (section === 'service' && term === 'Environment') {

                        elementToCompile = angular.element(`
                        <div style="padding: 10px; border: 1px dashed grey; margin-bottom: 10px;">

                        ${term}
            
                        <md-input-container class="md-block">
            
                            <md-chips ng-model="${section}.${term}"
                                      md-removable="true"
                                      readonly="true"
                                      style="min-height: 48px; display: inline-block;">
                            </md-chips>
                        </md-input-container>
            
                        <div layout="row">
                            <div flex="40">
                                <md-input-container class="md-block">
                                    <label>Key</label>
                                    <input type="text" ng-model="inputKey">
                                </md-input-container>
                            </div>
                            <div flex="40">
                                <md-input-container class="md-block">
                                    <label>Value</label>
                                    <input type="text" ng-model="inputVar">
                                </md-input-container>
                            </div>
                            <div flex>
                                <md-button ng-click="addMapVariable('${section}', '${term}')">Add</md-button>
                            </div>
                        </div>
                    </div>`);

                    } else if (Array.isArray(scope[section][term])) {

                        elementToCompile = angular.element(`
                      <md-input-container ng-show="${visibleItems}.includes('${term}')" class="md-block">
                        <md-chips ng-model="${section}.${term}" input-aria-label="${term}" md-separator-keys="keys"
                                  placeholder="${term}"
                                   secondary-placeholder="Add another" input-aria-describedby="spaceSeparatorKeyWants">
                        </md-chips>
                       </md-input-container>`);

                    } else if (typeof scope[section][term] === 'string') {

                        if (scope.enums[section] && scope.enums[section].hasOwnProperty(term)) {

                            elementToCompile = angular.element(`
                            <md-input-container  ng-show="${visibleItems}.includes('${term}')" class="md-block">
                            <label>${term}</label>
                            <md-select ng-model="${section}.${term}">
                                <md-option ng-repeat="option in enums.${section}.${term}" value="{{option}}">
                                    {{option}}
                                </md-option>
                            </md-select>
                        </md-input-container>`);

                        } else {

                            elementToCompile = angular.element(`
                         <md-input-container ng-show="${visibleItems}.includes('${term}')" class="md-block">
                            <label>${term}</label>
                            <input type="text" ng-model="${section}.${term}">
                         </md-input-container>
                        `);

                        }

                    }

                    if (elementToCompile) {
                        iElement.append(elementToCompile);

                        $compile(elementToCompile)(scope);
                    }
                });
            }
        }
    }])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme('default')
            .primaryPalette('amber')
            .dark();

    }]);