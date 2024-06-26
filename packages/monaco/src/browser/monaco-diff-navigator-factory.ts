// *****************************************************************************
// Copyright (C) 2018 TypeFox and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { injectable } from '@theia/core/shared/inversify';
import { DiffNavigator } from '@theia/editor/lib/browser';
import { IDiffEditor } from '@theia/monaco-editor-core/esm/vs/editor/browser/editorBrowser';

@injectable()
export class MonacoDiffNavigatorFactory {

    static nullNavigator = <DiffNavigator>{
        hasNext: () => false,
        hasPrevious: () => false,
        next: () => { },
        previous: () => { },
    };

    createdDiffNavigator(editor: IDiffEditor): DiffNavigator {
        return {
            hasNext: () => true,
            hasPrevious: () => true,
            next: () => editor.goToDiff('next'),
            previous: () => editor.goToDiff('previous')
        };
    }
}
