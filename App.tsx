import React from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
} from 'react-native';

import { CoreBridge, RichText, TenTapStartKit, Toolbar, useEditorBridge } from '@10play/tentap-editor';

import { Images, ToolbarItem } from "@10play/tentap-editor";

const KROOLO_TOOLBAR_ITEMS: ToolbarItem[] = [
  {
    onPress:
      ({ editor }) =>
        () =>
          editor.toggleBold(),
    active: ({ editorState }) => editorState.isBoldActive,
    disabled: ({ editorState }) => !editorState.canToggleBold,
    image: () => Images.bold,
  },
  {
    onPress:
      ({ editor }) =>
        () =>
          editor.toggleItalic(),
    active: ({ editorState }) => editorState.isItalicActive,
    disabled: ({ editorState }) => !editorState.canToggleItalic,
    image: () => Images.italic,
  },
  {
    onPress:
      ({ editor }) =>
        () =>
          editor.toggleUnderline(),
    active: ({ editorState }) => editorState.isUnderlineActive,
    disabled: ({ editorState }) => !editorState.canToggleUnderline,
    image: () => Images.underline,
  },
  {
    onPress:
      ({ editor }) =>
        () =>
          editor.toggleStrike(),
    active: ({ editorState }) => editorState.isStrikeActive,
    disabled: ({ editorState }) => !editorState.canToggleStrike,
    image: () => Images.strikethrough,
  },
  {
    onPress:
      ({ editor }) =>
        () =>
          editor.toggleOrderedList(),
    active: ({ editorState }) => editorState.isOrderedListActive,
    disabled: ({ editorState }) => !editorState.canToggleOrderedList,
    image: () => Images.orderedList,
  },
  {
    onPress:
      ({ editor }) =>
        () =>
          editor.toggleBulletList(),
    active: ({ editorState }) => editorState.isBulletListActive,
    disabled: ({ editorState }) => !editorState.canToggleBulletList,
    image: () => Images.bulletList,
  },
];

const bridgeExtensions = [
  ...TenTapStartKit,
  CoreBridge.configureCSS(`
* {
  font-family: sans-serif;
}
`),
]

const App = () => {

  const editor = useEditorBridge({
    autofocus: false,
    initialContent: ``,
    avoidIosKeyboard: true,
    dynamicHeight: true,
    bridgeExtensions: bridgeExtensions,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#E1E1E1" }}>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
          <Text>{"Messages list"}</Text>
        </View>
      </View>
      <RichText
        editor={editor}
        bounces={false}
        style={{ padding: 20 }}
      />
      <KeyboardAvoidingView behavior="padding">
        <View style={{ height: 40, width: 270, alignSelf: "center" }}>
          <Toolbar
            hidden={false}
            editor={editor}
            items={KROOLO_TOOLBAR_ITEMS}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  footerContainer: {
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    borderColor: "#F1F1F1",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "white",
  },
})

export default App;
