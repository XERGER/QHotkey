<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>HotTestWidget</name>
    <message>
        <location filename="../HotkeyTest/hottestwidget.ui" line="+14"/>
        <source>HotTestWidget</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Playground</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Hotkey &amp;1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Hotkey &amp;2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+120"/>
        <location line="+134"/>
        <location line="+134"/>
        <location line="+14"/>
        <location line="+160"/>
        <location line="+429"/>
        <source>Count:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-747"/>
        <source>Hotkey &amp;3:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Hotkey &amp;4:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+261"/>
        <source>Hotkey &amp;5:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+200"/>
        <source>Testings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>&lt;b&gt;Testing:&lt;/b&gt; Please press the combinations listed below to check whether they work properly or not. Every time a shortcut is triggered, the checkbox will toggle it&apos;s value. Set the test active to begin.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Test Active:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Hotkey: F</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: ctrl+alt+meta+F12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: ctrl+shift+cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: meta+del</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: numlock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: ctrl+5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: shift+Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: shift+,</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Hotkey: shift+;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+10"/>
        <source>Hotkey: shift+alt+K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Threading</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This test was designed to try out multi-threaded shortcuts. The QHotkey class is completely &lt;span style=&quot; font-weight:600;&quot;&gt;threadsafe&lt;/span&gt;, but this test can help to see if it actually works (It does).&lt;/p&gt;&lt;p&gt;If activated, &lt;span style=&quot; font-style:italic;&quot;&gt;Hotkey 4 and Hotkey 5 &lt;/span&gt;of the Playground will each run on their own thread. This means:&lt;/p&gt;&lt;ul style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; text-decoration: underline;&quot;&gt;Mainthread:&lt;/span&gt; Hotkey 1, 2, 3&lt;/li&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; text-decoration: underline;&quot;&gt;Second thread:&lt;/span&gt; Hotkey 4&lt;/li&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; text-decoration: underline;&quot;&gt;Third thread:&lt;/span&gt; Hotkey 5&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Note:&lt;/span&gt; The two hotkeys will be moved to the threads. For simplicity-reasons, you can&apos;t move them back in this test (But its possible, just not done here). Restart the test to get them back.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Enable Threaded Hotkeys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Native Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;QHotkey allows you to set native shortcuts explicitly. These, of course, only work on the platform they were chosen for. All platform use special constants for their key codes and modifiers, which makes it pretty simple to use them from code. If you want to test them out here, google for the tables.&lt;/p&gt;&lt;p&gt;In most cases, you will not need to specify native shortcuts directly. However, as explained on previous tabs, some shortcuts may not be creatable from Qt&apos;s key (e.g. Numblock numbers). In that case, you can set the directly.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; text-decoration: underline;&quot;&gt;Example: Ctrl+A&lt;/span&gt;&lt;/p&gt;&lt;ul style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Windows:&lt;/span&gt; Key: &lt;span style=&quot; font-style:italic;&quot;&gt;0x0041&lt;/span&gt;, Modifier: &lt;span style=&quot; font-style:italic;&quot;&gt;0x0002&lt;/span&gt;&lt;/li&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;X11:&lt;/span&gt; Key: &lt;span style=&quot; font-style:italic;&quot;&gt;0x0026&lt;/span&gt;, Modifier: &lt;span style=&quot; font-style:italic;&quot;&gt;0x0004&lt;/span&gt;&lt;/li&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;OsX:&lt;/span&gt; Key: &lt;span style=&quot; font-style:italic;&quot;&gt;0x0000&lt;/span&gt;, Modifier: &lt;span style=&quot; font-style:italic;&quot;&gt;0x0100&lt;/span&gt;&lt;span style=&quot; text-decoration: underline;&quot;&gt;&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Key:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+20"/>
        <source>0x</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Modifiers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+137"/>
        <source>Registered:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QHotkey</name>
    <message>
        <location filename="../QHotkey/qhotkey.cpp" line="+294"/>
        <source>Failed to register %1. Error: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Failed to unregister %1. Error: %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
